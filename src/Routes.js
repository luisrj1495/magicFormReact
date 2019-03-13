import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'

import HocTest from './containers/HocTest/HocTest'
import HookTest from './containers/HookTest/HookTest'

const Routes = props => {
	return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" render={props => <HookTest {...props} />} /> */}
        <Route path="/puta" render={props => <HocTest {...props} />} />
   
      </Switch>
    </BrowserRouter>
	)
}

export default Routes
