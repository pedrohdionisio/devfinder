import styled from 'styled-components'

import search from '../../assets/images/search.svg'

export const Wrapper = styled.div`
  margin-top: 32px;
`

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input, button {
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

    transition: border-color .3s ease-in-out;

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

    transition: opacity .3s ease-in-out;

    &:hover {
      opacity: .7;
    }
  }
`
