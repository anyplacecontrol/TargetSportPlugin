import {strings} from '../../language/strings'
import {BaseReducer, changeField} from './baseRedux'
import {generateUUID} from '../../shared/utils/sharedFunctions'

export const UI_PREFIX = 'ui'
const RESET_STATE = UI_PREFIX + '/RESET_STATE'

let isAlertError = false //indicates alert modal with error
export const getIsAlertError = () => isAlertError

export const uiInitialState = {
  isLoading: false,
  isHandicappedMode: false,
  currentLanguageId: `en`,
  alertData: null
}

export default function reducer(state = uiInitialState, action = {}) {
  let result = BaseReducer(UI_PREFIX, state, action)
  if (result) return result

  switch (action.type) {
    case RESET_STATE: {
      return {
        ...uiInitialState
      }
    }

    default:
      return state
  }
}

export function hideAlert() {
  return async function (dispatch) {
    await dispatch(changeField('alertData', null, UI_PREFIX))
  }
}

export function showAlert(caption, text, buttons = null) {
  return async function (dispatch) {
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

export function showError(e, title = strings.MachineError) {
  return async function (dispatch) {
    let errorObj
    try {
      errorObj = JSON.parse(e.message)
    } catch (e1) {
      if (e.message) errorObj = {errorMessage: e.message}
      else errorObj = {errorMessage: JSON.stringify(e)}
    }

    let msg = exceptionToMessage(errorObj)
    await dispatch(showAlert(title, msg, null, true))
  }
}

export function showBackdrop(isVisible) {
  return changeField('isLoading', isVisible, UI_PREFIX)
}

export function hideAllModals() {
  return async function (dispatch) {
    await dispatch(hideAlert())
    await dispatch(showBackdrop(false))
  }
}
