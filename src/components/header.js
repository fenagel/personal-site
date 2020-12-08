import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Div = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
const MyHeader = styled.header`
  margin-bottom: 1.45rem;
  background: #292A2C;
`

const Header = ({ siteTitle }) => (
  <MyHeader>
    <Div>
      <h1 style={{ margin: 0 }}>
        <Link
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Div>
  </MyHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
