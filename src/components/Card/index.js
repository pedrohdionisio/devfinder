/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'

import {
  SearchContainer, UserContainer, UserInfo, Wrapper,
} from './styles'

import octocat from '../../assets/images/octocat.png'

export default function Card() {
  return (
    <Wrapper>
      <SearchContainer>
        <input type="text" placeholder="Search github username..." />
        <button type="button">Search</button>
      </SearchContainer>

      <UserContainer>
        <UserInfo>
          <img src={octocat} alt="Octocat" />
          <div>
            <p className="title">The Octocat <small>Joined 25 Jan 2021.</small></p>
            <span>@octocat</span>
            <p className="bio">This profile has no bio.</p>
          </div>
        </UserInfo>
      </UserContainer>

    </Wrapper>
  )
}
