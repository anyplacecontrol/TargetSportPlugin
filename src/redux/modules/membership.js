import * as uiRedux from './ui'
import * as membershipApi from '../../api/membershipApi'

export function loginToMembership(login, password) {
  return async function (dispatch) {
    dispatch(uiRedux.showBackdrop(true))
    try {
      const response = await membershipApi.loginToMembership(login, password)
      if (response.success && response.hasDiscount) {
        dispatch(uiRedux.showAlert('Discount available', 'You have successfully logged in and have a discount'))
        //todo: leave plugin
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
