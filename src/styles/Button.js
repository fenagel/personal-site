import styled from 'styled-components'

const Button = styled.button`
  position: relative;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  margin: 0 4px;
  padding: 1.5rem 4rem;
  border-radius: 10rem;
  border: none;
  color: #fff;
  background: linear-gradient(to bottom right, #FFC25B, #DE9B29);
  font-family: inherit;
  font-size: 1.7rem;
  line-height: 1.231;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: black;
    content: '';
    opacity: 0;
    transition: opacity 0.25s;
  }

  &:focus,
  &:hover {
    &::before {
      opacity: 0.25;
    }
  }

  &:active {
    &::before {
      opacity: 0.4;
    }
  }

  &:focus {
    outline: none;
  }
`

export default Button