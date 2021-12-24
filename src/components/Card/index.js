/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useState } from 'react'
import { AppContext } from '../../contexts/ThemeContext'

import {
  SearchContainer, UserContainer, UserInfo, UserLinks, UserNotFoundContainer, UserStats, Wrapper,
} from './styles'

import locationWhite from '../../assets/images/location-white.svg'
import attachWhite from '../../assets/images/attach-white.svg'
import bagWhite from '../../assets/images/bag-white.svg'
import locationBlack from '../../assets/images/location-black.svg'
import attachBlack from '../../assets/images/attach-black.svg'
import bagBlack from '../../assets/images/bag-black.svg'

export default function Card() {
  const { theme } = useContext(AppContext)

  const [user, setUser] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(null)
  const [userData, setUserData] = useState()

  async function handleSubmit() {
    try {
      setIsLoading(true)
      const data = await fetch(`https://api.github.com/users/${user}`)
      const res = await data.json()

      setUserData(res)
    } catch (error) {
      setHasError(error)
      console.log(hasError)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return 'Loading...'
  }

  return (
    <Wrapper>
      <SearchContainer onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search github username..."
          onChange={({ target }) => setUser(target.value)}
        />
        <button type="submit">Search</button>
      </SearchContainer>

      {(userData && userData.message) && (
        <UserNotFoundContainer>
          <span>User not found. Please, try again!</span>
        </UserNotFoundContainer>
      )}

      {(userData && !userData.message) && (
        <UserContainer>
          <UserInfo>
            <img src={userData.avatar_url} alt="Octocat" />
            <div>
              <p className="title">{userData.name}</p>
              <span>@{userData.login}</span>
              <p className="bio">{userData.bio ? userData.bio : 'This profile has no bio'}</p>
            </div>
          </UserInfo>

          <UserStats>
            <div>
              <p>All Repos</p>
              <span>{userData.public_repos}</span>
            </div>

            <div>
              <p>Followers</p>
              <span>{userData.followers}</span>
            </div>

            <div>
              <p>Following</p>
              <span>{userData.following}</span>
            </div>
          </UserStats>

          <UserLinks>
            <div>
              <img
                src={theme === 'dark' ? locationWhite : locationBlack}
                alt="Location"
              />
              <span>{userData.location ? userData.location : 'Not Avaible'}</span>
            </div>

            <div>
              <img
                src={theme === 'dark' ? attachWhite : attachBlack}
                alt="Attach"
              />
              <a
                href={`https://${userData.blog}`}
                target="_blank"
                rel="noreferrer"
              >
                Personal Blog
              </a>
            </div>

            <div>
              <img
                src={theme === 'dark' ? bagWhite : bagBlack}
                alt="Bag"
              />
              <span>{userData.company ? userData.company : 'Not Avaible'}</span>
            </div>
          </UserLinks>

        </UserContainer>
      )}
    </Wrapper>
  )
}
