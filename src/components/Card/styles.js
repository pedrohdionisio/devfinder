import styled from 'styled-components'

import search from '../../assets/images/search.svg'

export const Wrapper = styled.div`
  margin-top: 40px;
`

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input,
  button {
    height: 50px;

    border-radius: 5px;
    border: none;
    outline: none;
  }

  input {
    width: 80%;
    padding: 16px 16px 16px 50px;

    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 10px center;

    font-size: 16px;

    background-color: ${({ theme }) => theme.colors.secondaryBg};
    color: ${({ theme }) => theme.colors.text};

    border: 1px solid transparent;

    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  button {
    width: 15%;

    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};

    font-size: 18px;

    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 40px;
  padding: 16px;

  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 5px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: flex-start;

  width: 100%;
  margin-bottom: 40px;

  img {
    width: 100px;
    border-radius: 50%;

    margin-right: 16px;
  }

  div {
    width: 100%;

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;

      font-size: 24px;

      small {
        text-align: end;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.gray};

      }
    }

    span {
      color: ${({ theme }) => theme.colors.blue};
    }

    .bio {
      margin-top: 16px;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`

export const UserStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.primaryBg};
  width: 100%;

  border-radius: 5px;
  padding: 16px;

  div {
    p {
      color: ${({ theme }) => theme.colors.gray};
      margin-bottom: 8px;
    }

    span {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 18px;
      font-weight: bold;
    }
  }
`

export const UserLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 40px;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.gray};
      margin-left: 8px;
    }

    span {
      color: ${({ theme }) => theme.colors.gray};
      margin-left: 8px;
    }
  }
`

export const UserNotFoundContainer = styled.div`
  margin-top: 40px;
`
