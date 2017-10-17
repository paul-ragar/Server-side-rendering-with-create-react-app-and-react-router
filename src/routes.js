import React from 'react'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

import Home from './app/home/Home'
import Settings from './app/settings/Settings'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}></Route>
      <Route path="/settings" component={Settings} />      
      <Route path="*">
        <IndexRedirect to="/" />
      </Route>
    </Router>
  )
}

export default Routes
