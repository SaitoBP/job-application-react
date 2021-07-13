import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './pages/Routes'

import { ThemeProvider } from '@material-ui/core/styles'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
