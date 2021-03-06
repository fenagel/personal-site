/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./Navbar"
import "./layout.css"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    @media only screen and (max-width: 81.25em) {
      font-size: 50%;
  }
  
  body {
    margin: 0;
    padding: 0;
    line-height: 1.8;

    @media only screen and (max-width: 56.25em) {
      line-height: 1.6;
    }
  }

`

const Div = styled.main`
  position: relative;
  display: grid;
  grid-template-rows: repeat(8,min-content);
  grid-template-columns: [full-start] minmax(6rem,1fr) [center-start] repeat(8,[col-start] minmax(min-content,14rem) [col-end]) [center-end] minmax(6rem,1fr) [full-end];
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Div>
        {children}
        <footer style={{
          fontSize: `1.8rem`,
          padding: `2rem`,
          marginTop: `2rem`,
          gridColumn: `full-start/full-end`
        }}>
          © Copyright Felix Nagel {new Date().getFullYear()}
        </footer>
      </Div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
