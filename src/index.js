import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './pages/Routes'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
