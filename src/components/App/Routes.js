import React from 'react'
import {Route, Router, Switch} from 'react-router'
import * as c from '../../const'
import {Home} from '../../pages/home'
import {Login} from '../../pages/login'
import {GlobalLayout} from './GlobalLayout'
import { history } from '../../redux/configureStore'

const ROUTES = [
  {path: c.LINK_HOME, component: Home, exact: true},
  {path: c.LINK_LOGIN, component: Login}
]

export const Routes = () => {
  return (
    <GlobalLayout>
      <Router history={history}>
        <Switch >
          {ROUTES.map((route, index) => {
            if (route.isHidden) return null

            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            )
          })}
        </Switch>
        </Router>
    </GlobalLayout>
  )
}
