import React, { useContext } from 'react'
import { AppContext } from '../../contexts/ThemeContext'

import { Wrapper } from './styles'

import sun from '../../assets/images/sun.svg'
import moon from '../../assets/images/moon.svg'

export default function Header() {
  const { setTheme, theme } = useContext(AppContext)

  function handleThemeSwitch() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Wrapper>
      <span>devfinder</span>
      <button type="button" onClick={handleThemeSwitch}>
        <img src={theme === 'dark' ? sun : moon} alt="switch theme" />
      </button>
    </Wrapper>
  )
}
