import React from 'react'

import { SearchContainer, Wrapper } from './styles'

export default function Card() {
  return (
    <Wrapper>
      <SearchContainer>
        <input type="text" placeholder="Search github username..." />
        <button type="button">Search</button>
      </SearchContainer>
    </Wrapper>
  )
}
