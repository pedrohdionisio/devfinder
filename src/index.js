import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import AppProvider from './contexts/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
