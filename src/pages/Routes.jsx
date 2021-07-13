import React from 'react'

import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <LandingPage />
      </Route>
    </Switch>
  )
}

export default Routes
