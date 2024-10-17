import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import reducers from './reducer'
import {initialState} from './initialState'

export const history = createHistory()
const connectRouterHistory = connectRouter(history)

const rootReducer = combineReducers({...reducers, router: connectRouterHistory})

const rootReducerWithReset = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = initialState
  }
  return rootReducer(state, action)
}

//----------------------------------------------------------------------
export function configureStoreProd(state) {
  if (!state) {
    state = initialState
  }

  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [thunk, reactRouterMiddleware]

  const store = createStore(connectRouterHistory(rootReducerWithReset), state, applyMiddleware(...middlewares))

  return store
}
//----------------------------------------------------------------------
function configureStoreDev() {
  const reactRouterMiddleware = routerMiddleware(history)
  const middlewares = [reduxImmutableStateInvariant(), thunk, reactRouterMiddleware]

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    connectRouterHistory(rootReducerWithReset),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default
      store.replaceReducer(connectRouterHistory(nextRootReducer))
    })
  }

  return store
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
