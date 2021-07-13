import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './LandingPage'
import List from './List'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>

        <Route path='/list'>
          <List />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
