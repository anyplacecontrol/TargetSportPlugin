import {BaseReducer} from '../../shared/redux/baseRedux'

import {UI_PREFIX, baseUiInitialState} from '../../shared/redux/baseUi'
export * from '../../shared/redux/baseUi'

const RESET_STATE = UI_PREFIX + '/RESET_STATE'

export const uiInitialState = {
  ...baseUiInitialState
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
