import React from 'react'
import {withRouter} from 'react-router'
import {Routes} from './Routes'
import {ModalDialogs} from './ModalDialogs'

const App = () => {
  return (
    <>
      <Routes />
      <ModalDialogs />
    </>
  )
}

export const ConnectedApp = withRouter(App)
export default ConnectedApp
