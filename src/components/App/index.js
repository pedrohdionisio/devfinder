import { ThemeProvider } from 'styled-components'

import darkTheme from '../../assets/styles/themes/dark'

import GlobalStyles from '../../assets/styles/global'

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      App
    </ThemeProvider>
  )
}
