import PropTypes from 'prop-types'

import { createContext, useState } from 'react'

export const AppContext = createContext({})

export default function AppProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
