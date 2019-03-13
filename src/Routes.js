import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import HocTest from './containers/HocTest/HocTest'
import HookTest from './containers/HookTest/HookTest'

const Routes = props => {
	return (
    <BrowserRouter>
      <Switch>
        <Route path="/hoc" render={props => <HocTest {...props} />} />
        <Route path="/" render={props => <HookTest {...props} />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
	)
}

export default Routes
