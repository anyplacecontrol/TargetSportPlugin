import {CMD_CLICK} from '../const/pluginCommands'

// Usage: createClass(`block-set-item`, {'--col': isCol}, cls)
export function createClass(baseClass, conditions = {}, addCls = ``) {
  function isObjectNotEmpty(obj) {
    return Boolean(obj && typeof obj === `object` && Object.keys(obj).length)
  }

  if (!(baseClass || isObjectNotEmpty(conditions))) return null

  const classNames = [baseClass]

  Object.keys(conditions).forEach((condition) => {
    if (conditions[condition]) {
      classNames.push(condition)
    }
  })

  if (addCls) classNames.push(addCls)

  return classNames.join(` `)
}

//------------------------------------------------------------
export function isHandicappedModeCls(isActive) {
  if (!isActive) return ``
  return `handicapped-mode-active`
}
//------------------------------------------------------------
export function getDateTime() {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth() + 1
  var day = now.getDate()
  var hour = now.getHours()
  var minute = now.getMinutes()
  var second = now.getSeconds()

  if (month.toString().length === 1) {
    month = '0' + month
  }
  if (day.toString().length === 1) {
    day = '0' + day
  }
  if (hour.toString().length === 1) {
    hour = '0' + hour
  }
  if (minute.toString().length === 1) {
    minute = '0' + minute
  }
  if (second.toString().length === 1) {
    second = '0' + second
  }

  return year + '-' + month + '-' + day + ' ' + hour + '_' + minute + '_' + second
}
//------------------------------------------------------------

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
//------------------------------------------------------------
export function toBool(val) {
  return Boolean(val || null)
}
//------------------------------------------------------------
export function sendMessageToParent(command, payload) {
  if (window.parent !== window) {
    // Check if the application is inside an iframe
    const message = {command, payload}
    window.parent.postMessage(message, '*')
    if (command != CMD_CLICK) window.logger.info(`sendMessageToParent() was called with command: ${command}`)
  } else {
    if (command != CMD_CLICK)
      window.logger.error('sendMessageToParent() was called, but the application is not inside an iframe')
  }
}
