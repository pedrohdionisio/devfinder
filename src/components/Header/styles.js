import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`
