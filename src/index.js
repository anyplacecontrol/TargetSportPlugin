import React from 'react'
// eslint-disable-next-line import/no-named-as-default
import Root from './components/Root/Root'
import * as u from './utils'
// Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import './assets/css/main.css'
import {render} from 'react-dom'
import configureStore, {history} from './redux/configureStore'
import {ErrorBoundary} from './shared/components/ErrorBoundary'
import {sendMessageToParent} from './shared/utils/sharedFunctions'
import {CMD_CLICK} from './shared/const/pluginCommands'
import {PLUGIN_COLORS} from './const/colors'
import {DEFAULT_COLORS} from './shared/const/defaultColors'

function noselect() {
  return false
}
document.ondragstart = noselect
document.onselectstart = noselect
document.oncontextmenu = noselect

window.logger = u.logger

export const store = configureStore()

window.addEventListener('click', () => {
  sendMessageToParent(CMD_CLICK)
})

Object.assign(DEFAULT_COLORS, PLUGIN_COLORS)

render(
  <ErrorBoundary>
    <Root
      store={store}
      history={history}
    />
  </ErrorBoundary>,
  document.getElementById(`main`)
)
