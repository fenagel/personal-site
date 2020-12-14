// NavbarLinks.js

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavItem = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #FFC25B;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #FFC25B;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </>
  )
}

export default NavbarLinks