import * as uiRedux from './ui'
import * as membershipApi from '../../api/membershipApi'
import {MEMBERSHIP_DISCOUNT} from '../../const/general'
import {sendMessageToParent} from '../../shared/utils/sharedFunctions'
import * as pluginCommands from '../../shared/const/pluginCommands'

export function loginToMembership(login, password) {
  return async function (dispatch) {
    dispatch(uiRedux.showBackdrop(true))
    try {
      const response = await membershipApi.loginToMembership(login, password)
      if (response.success && response.hasDiscount) {
        window.logger.info(`You have successfully logged in and have a discount ${MEMBERSHIP_DISCOUNT}%`)

        sendMessageToParent(pluginCommands.CMD_APPLY_DISCOUNT, {
          discountValue: MEMBERSHIP_DISCOUNT,
          messageHeader: 'Time to Start Shopping!',
          messageText: `Your standard membership gets you a ${MEMBERSHIP_DISCOUNT}% discount!`
        })
        return
      }
      if (response.success && !response.hasDiscount) {
        dispatch(uiRedux.showAlert('Discount NOT available', 'You have successfully logged in but have no discount'))
        return
      }
      if (!response.success) {
        dispatch(uiRedux.showAlert('Error', response.error || 'An error occurred'))
        return
      }
    } catch (e) {
      dispatch(uiRedux.baseShowError(e))
    } finally {
      dispatch(uiRedux.showBackdrop(false))
    }
  }
}
