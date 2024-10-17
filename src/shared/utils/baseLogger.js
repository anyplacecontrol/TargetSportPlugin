import * as u from './sharedFunctions'

class BaseLogger {
  sendLogToGateway = (level, message, additionalMessage, location) => {
    // implement gateway log logic in child class
  }

  consoleLog = (level, message, additionalMessage, location) => {
    const func = level === 'error' ? 'error' : 'log'
    console[func]('-------------------------')
    console[func](u.getDateTime() + ' > ' + (location || ''))
    console[func](message || '')

    if (additionalMessage && additionalMessage !== '' && level !== 'error') {
      console[func](additionalMessage)
    }

    if (additionalMessage && additionalMessage !== '' && level === 'error') {
      console[func](additionalMessage)
    }
  }

  debug = (message, additionalMessage, location) => {
    this.consoleLog('debug', message, additionalMessage, location)
    this.sendLogToGateway('DEBUG', message, additionalMessage, location)
  }

  info = (message, additionalMessage, location) => {
    this.consoleLog('info', message, additionalMessage, location)
    this.sendLogToGateway('INFO', message, additionalMessage, location)
  }

  warn = (message, additionalMessage, location) => {
    this.consoleLog('warn', message, additionalMessage, location)
    this.sendLogToGateway('WARN', message, additionalMessage, location)
  }

  error = (message, exceptionObj_orString, location) => {
    this.consoleLog('error', message, exceptionObj_orString, location)

    let additionalMessage = ''
    if (exceptionObj_orString) {
      if (exceptionObj_orString.message) {
        additionalMessage += exceptionObj_orString.message
      }
      if (exceptionObj_orString.stack) {
        additionalMessage += '\r\n\r\nStack: \r\n' + exceptionObj_orString.stack
      }
      if (additionalMessage === '') additionalMessage = exceptionObj_orString
    }

    this.sendLogToGateway('ERROR', message, additionalMessage, location)
  }
}

export default BaseLogger
