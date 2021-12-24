/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext } from 'react'
import { AppContext } from '../../contexts/ThemeContext'

import {
  SearchContainer, UserContainer, UserInfo, UserLinks, UserStats, Wrapper,
} from './styles'

import octocat from '../../assets/images/octocat.png'
import locationWhite from '../../assets/images/location-white.svg'
import attachWhite from '../../assets/images/attach-white.svg'
import bagWhite from '../../assets/images/bag-white.svg'
import locationBlack from '../../assets/images/location-black.svg'
import attachBlack from '../../assets/images/attach-black.svg'
import bagBlack from '../../assets/images/bag-black.svg'

export default function Card() {
  const { theme } = useContext(AppContext)

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
            <p className="title">Pedro Henrique Dionisio <small>Joined 25 Jan 2021.</small></p>
            <span>@octocat</span>
            <p className="bio">This profile has no bio.</p>
          </div>
        </UserInfo>

        <UserStats>
          <div>
            <p>All Repos</p>
            <span>20</span>
          </div>

          <div>
            <p>Followers</p>
            <span>5000</span>
          </div>

          <div>
            <p>Following</p>
            <span>120</span>
          </div>
        </UserStats>

        <UserLinks>
          <div>
            <img
              src={theme === 'dark' ? locationWhite : locationBlack}
              alt="Location"
            />
            <span>San Francisco</span>
          </div>

          <div>
            <img
              src={theme === 'dark' ? attachWhite : attachBlack}
              alt="Attach"
            />
            <a href="/">Personal Blog</a>
          </div>

          <div>
            <img
              src={theme === 'dark' ? bagWhite : bagBlack}
              alt="Bag"
            />
            <span>GitHub</span>
          </div>
        </UserLinks>

      </UserContainer>
    </Wrapper>
  )
}
