import React from 'react'

import { Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import List from './List'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <LandingPage />
      </Route>

      <Route path='/list'>
        <List />
      </Route>
    </Switch>
  )
}

export default Routes
