import React from 'react'
import {withRouter} from 'react-router'
import {Routes} from './Routes'
import {ModalDialogs} from './ModalDialogs'
import {SwitchLanguageToId} from '../../shared/utils/stringsAggregator'
import {language} from '../../config'

const App = () => {
  SwitchLanguageToId(language)
  return (
    <>
      <Routes />
      <ModalDialogs />
    </>
  )
}

export const ConnectedApp = withRouter(App)
export default ConnectedApp
