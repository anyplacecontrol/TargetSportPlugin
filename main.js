'use strict'

// Import parts of electron to use
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const url = require('url')
const heartBeat = require('./src/electron/heartBeat.js')
const scanner = require('./src/electron/scanner.js')
const cardreader = require('./src/electron/cardreader.js')
const logger = require('./src/electron/logger.js')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Keep a reference for dev mode
let dev = false

if (
  process.defaultApp ||
  /[\\/]electron-prebuilt[\\/]/.test(process.execPath) ||
  /[\\/]electron[\\/]/.test(process.execPath)
) {
  dev = true
}

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
}

//Port for remote debugging Renderer process
if (dev) app.commandLine.appendSwitch('remote-debugging-port', '9222')

function createWindow() {
  // Create the browser window.
  if (dev)
    mainWindow = new BrowserWindow({
      show: false
    })
  else
    mainWindow = new BrowserWindow({
      show: false,
      fullscreenable: true,
      maximizable: true,
      fullscreen: true,
      alwaysOnTop: true,
      kiosk: true
    })

  // and load the index.html of the app.
  let indexPath

  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    })
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    })
  }

  mainWindow.loadURL(indexPath)

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (!dev) {
      mainWindow.maximize()
      mainWindow.setFullScreen(true)
      mainWindow.setKiosk(true)
    }

    // Open the DevTools automatically if developing
    if (dev) {
      mainWindow.webContents.openDevTools()
    }
  })

  //prevent minimizing of electron window
  mainWindow.on('blur', () => {
    if (!dev) {
      mainWindow.restore()
      mainWindow.focus()
      mainWindow.setKiosk(true)
    }
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    clearInterval(window.heartBeatTimer)
  })

  heartBeat.startHeartBeatTimer(mainWindow)
  scanner.startScannerUtility(mainWindow)
  cardreader.startCardreaderUtility(mainWindow)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

//Receive log messages from renderer
ipcMain.on('log', (event, level, message, additionalMessage, location) => {
  logger.saveLogToFile(level, message, additionalMessage, location)
})
