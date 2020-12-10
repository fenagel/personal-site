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
  background: #292A2C;
`
const StyledH1 = styled.h1`
  font-size: 3rem;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <MyHeader>
    <Div>
      <StyledH1>
        <Link
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </StyledH1>
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
