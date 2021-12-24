import PropTypes from 'prop-types'

import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const AppContext = createContext({})

export default function AppProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
