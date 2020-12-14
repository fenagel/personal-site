import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Div from '../styles/Div'
import Heading from '../styles/Heading'
import Paragraph from '../styles/Paragraph'
import Mobile from '../assets/mobileapp.svg'

const StyledMobile = styled(Mobile)`
  justify-self: end;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Web Development Projects" />
    <Div
      display="grid"
      gridTempCol="1fr 1fr"
      alignItems="center"
      justifyItems="center"

    >
      <StyledMobile height="30rem" width="30rem" />
      <Heading
        fSize="4.5rem"
        fWeight="700"
        lineHeight="1.7"
        justifySelf="start"
      >
        Featured Projects
      </Heading>
    </Div>
    <Paragraph
      fSize="2.5rem"
    >
    Welcome to page 2
    </Paragraph>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
