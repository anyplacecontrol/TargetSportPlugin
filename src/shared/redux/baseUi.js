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
    const regex = /(PUT|POST|GET|DELETE):http[^\s]*/g
    if (regex.test(logMessage)) {
      const UUID = ` (UUID: ${generateUUID()})`
      logMessage = logMessage + UUID
      dialogMessage = dialogMessage.replace(regex, UUID)
    }

    window.logger.info(caption, logMessage, 'showAlert')

    dispatch(changeField('alertData', {caption, text: dialogMessage, buttons}, UI_PREFIX))
  }
}

export function baseShowError(e, title, customHandler) {
  return async function (dispatch) {
    let errorObj
    try {
      errorObj = JSON.parse(e.message)
    } catch (e1) {
      if (e.message) errorObj = {errorMessage: e.message}
      else errorObj = {errorMessage: JSON.stringify(e)}
    }

    if (customHandler) {
      const isHandled = await customHandler(errorObj)
      if (isHandled) return
    }

    let msg = exceptionToMessage(errorObj)
    await dispatch(showAlert(title, msg, null, true))
  }
}

//--------------------------------------------------------------
export function exceptionToMessage(e) {
  let msg = e?.errorMessage || e?.message || e
  let msg_
  try {
    msg_ = JSON.parse(msg)
    //if msg_.errorMessage is string
    if (msg_.errorMessage) {
      if (typeof msg_.errorMessage === 'string') msg = msg_.errorMessage
      if (typeof msg_.errorMessage === 'object') {
        if (msg_.status === 500) msg = 'Internal Server Error'
        else msg = JSON.stringify(msg_.errorMessage)
      }
    }
  } catch (e2) {}

  if (msg.length > 250) {
    msg = 'Error has been happened. See log for details'
  }

  const url = e?.url || msg_?.url || ''
  if (url && !url.toLowerCase().includes('coupon')) msg = msg + ' ' + url
  return msg
}
