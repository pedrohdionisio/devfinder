import React from 'react'

import { Wrapper } from './styles'

import sun from '../../assets/images/sun.svg'

export default function Header() {
  return (
    <Wrapper>
      <span>devfinder</span>
      <button type="button">
        <img src={sun} alt="switch theme" />
      </button>
    </Wrapper>
  )
}
