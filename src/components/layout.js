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

const Div = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 10rem repeat(8,min-content);
  grid-template-columns: [full-start] minmax(6rem,1fr) [center-start] repeat(8,[col-start] minmax(min-content,14rem) [col-end]) [center-end] minmax(6rem,1fr) [full-end]
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
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Div>
        <Navbar />
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
