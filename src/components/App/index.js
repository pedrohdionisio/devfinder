import { ThemeProvider } from 'styled-components'
import AppProvider from '../../contexts/ThemeContext'

import darkTheme from '../../assets/styles/themes/dark'

import GlobalStyles from '../../assets/styles/global'
import { Wrapper } from './styles'
import Header from '../Header'

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Wrapper>
          <Header />
        </Wrapper>
      </ThemeProvider>
    </AppProvider>
  )
}
