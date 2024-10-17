import BaseLogger from '../shared/utils/baseLogger'

export class Logger extends BaseLogger {
  sendLogToGateway = (level, message, additionalMessage, location) => {
    // implement gateway log logic here
  }
}

export const logger = new Logger()
