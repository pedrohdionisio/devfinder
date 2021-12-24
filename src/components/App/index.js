import { ThemeProvider } from 'styled-components'

import { useContext } from 'react'

import darkTheme from '../../assets/styles/themes/dark'
import lightTheme from '../../assets/styles/themes/light'

import GlobalStyles from '../../assets/styles/global'
import { Wrapper } from './styles'
import Header from '../Header'
import { AppContext } from '../../contexts/ThemeContext'

export default function App() {
  const { theme } = useContext(AppContext)

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <Header />
      </Wrapper>
    </ThemeProvider>
  )
}
