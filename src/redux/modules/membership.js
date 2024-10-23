import {MEMBERSHIP_DISCOUNT} from '../../const/general'
import {sendMessageToParent} from '../../shared/utils/sharedFunctions'
import * as pluginCommands from '../../shared/const/pluginCommands'
import * as uiRedux from './ui'
import * as membershipApi from '../../api/membershipApi'
import {strings} from './strings'

export function loginToMembership(login, password) {
  return async function (dispatch) {
    dispatch(uiRedux.showBackdrop(true))
    try {
      const response = await membershipApi.loginToMembership(login, password)
      if (response.success && response.hasDiscount) {
        window.logger.info(strings.discountAvailable.replace('xx', MEMBERSHIP_DISCOUNT))

        sendMessageToParent(pluginCommands.CMD_APPLY_DISCOUNT, {
          discountValue: MEMBERSHIP_DISCOUNT,
          messageHeader: strings.timeToShop,
          messageText: strings.discountMessage.replace('xx', MEMBERSHIP_DISCOUNT)
        })
        return
      }
      if (response.success && !response.hasDiscount) {
        dispatch(uiRedux.showAlert(strings.discountNotAvailable, strings.discountNotAvailable))
        return
      }
      if (!response.success) {
        dispatch(uiRedux.showAlert(strings.error, response.error || strings.errorOccurred))
        return
      }
    } catch (e) {
      dispatch(uiRedux.baseShowError(e))
    } finally {
      dispatch(uiRedux.showBackdrop(false))
    }
  }
}
