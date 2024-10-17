import * as c from '../../const'
import * as u from '../../utils'
import {push} from 'connected-react-router'
import {BaseReducer} from './baseRedux'

const ROUTING_PREFIX = 'routing'
const RESET_STATE = ROUTING_PREFIX + '/RESET_STATE'

export const routingInitialState = {}

export default function reducer(state = routingInitialState, action = {}) {
  let result = BaseReducer(ROUTING_PREFIX, state, action)
  if (result) return result

  switch (action.type) {
    case RESET_STATE:
      return {...routingInitialState}

    default:
      return state
  }
}

export function resetState() {
  return function (dispatch) {
    dispatch({type: RESET_STATE})
  }
}

export function goto_Path(path) {
  return async function (dispatch) {
    dispatch(push(path))
  }
}

export function goto_Back() {
  return function (dispatch, getState) {
    let backPath = parseBackPathParam(getState())
    if (backPath) {
      dispatch(push(backPath))
      return backPath
    } else return false
  }
}

//*******************************************************************************
//SERVICE FUNCTIONS

export function parseBackPathParam(state) {
  let params = u.parseQueryParams(state.router.location.search)
  if (!params) return null

  //check backPath
  let backPath = params[c.QUERY_PARAMS.backPath]
  if (backPath && backPath !== '') return backPath

  //check encodedBackPath
  const encodedBackPath = params[c.QUERY_PARAMS.encodedBackPath]
  if (!encodedBackPath || encodedBackPath === '') return null

  backPath = window.atob(encodedBackPath)
  if (!backPath || backPath === '') return null

  return backPath
}

export function isDarkBackground(state) {
  for (var propertyName in c.ROUTES) {
    if (
      c.ROUTES[propertyName].path.toLowerCase() === state.router.location.pathname.toLowerCase() &&
      c.ROUTES[propertyName].isDarkBackground
    )
      return true
  }
  return false
}

export function isRootPage(state) {
  return state.router.location.pathname === '/'
}
