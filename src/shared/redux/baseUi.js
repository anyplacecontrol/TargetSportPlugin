import {changeField} from './baseRedux'
import {generateUUID} from '../utils/sharedFunctions'

export const UI_PREFIX = 'ui'
export const baseUiInitialState = {
  isLoading: false,
  currentLanguageId: `en`,
  alertData: null
}

export function showBackdrop(isVisible) {
  return changeField('isLoading', isVisible, UI_PREFIX)
}

export function hideAlert() {
  return async function (dispatch) {
    if (window.setIsAlertError) window.setIsAlertError(false)
    await dispatch(changeField('alertData', null, UI_PREFIX))
  }
}

export function showAlert(caption, text, buttons = null, isError = false) {
  return async function (dispatch) {
    if (window.setIsAlertError) window.setIsAlertError(isError)
    let logMessage = text
    let dialogMessage = text

    //if message contains url = replace it with UUID for security reasons
    const regex = /(PUT|POST|GET|DELETE):http:\/\/[^\s]+/g
    if (regex.test(logMessage)) {
      const UUID = ` (UUID: ${generateUUID()})`
      logMessage = logMessage + UUID
      dialogMessage = dialogMessage.replace(regex, UUID)
    }

    window.logger.info(caption, logMessage, 'showAlert')

    dispatch(changeField('alertData', {caption, text: dialogMessage, buttons}, UI_PREFIX))
  }
}
