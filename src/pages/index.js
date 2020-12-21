import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Div from '../styles/Div'
import Heading from '../styles/Heading'
import Paragraph from '../styles/Paragraph'
import Image from "../components/image"
import Code from "../assets/code.svg"
import Airplane from "../assets/aircraft.svg"
import Webdevices from "../assets/webdevices.svg"
import Wireframe from "../assets/wireframe.svg"
import Specs from "../assets/specs.svg"
import SEO from "../components/seo"

const HeaderHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
  height: 55vh;
  background-color: #292A2C;
  clip-path: ellipse(100% 50%);
`

const GridImage = styled.div`
  grid-column-start: 1;
  text-align: center;
  font-size: 3rem;
  justify-self: end;
`

const Intro = styled.div`
  background-color: #45464A;
  padding-top: 25rem;
  margin-top: -10rem;
  padding-bottom: 10rem;
`

const IntroGrid = styled.div`
  width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
  align-items: center;
  justify-items: center;
  margin-bottom: 20rem;
`

const StyledAirplane = styled(Airplane)`
  
`

const StyledWireframe = styled(Wireframe)`
  
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderHome>
      <GridImage>
        <Image />
        <p>Felix Nagel</p>
      </GridImage>
      <Heading
        fSize="4.5rem"
        fWeight="700"
        lineHeight="1.7"
      >
      Web Developer &<br></br>Online Marketing Specialist
      </Heading>
    </HeaderHome>
    <Intro>
      <Div
        width="120rem"
        display="grid"
        gridTempCol="2fr 1fr"
        gridColGap="5rem"
        ml="20rem"
        mr="20rem"
        mb="15rem"
        justifyItems="center"
      >
        <Paragraph
          fSize= "3rem"
          alignSelf="center"
          fWeight="700"
        >
        With my background online marketing & ecommerce I know what today's websites need to be marketable.
        </Paragraph>
        <Code height="20rem" width="20rem" />
      </Div>
      <IntroGrid>
        <Div
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <StyledAirplane height="20rem" width="20rem" />
          <Paragraph
            fSize="2rem"
          >
          Fast load times are a top priority!
          </Paragraph>
        </Div>
        <Div
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          <Webdevices height="20rem" width="20rem" />
          <Paragraph
            fSize="2rem"
          >
          Websites should be responsive for every screen
          </Paragraph>
        </Div>
      </IntroGrid>
      <IntroGrid>
      <Div
          display="flex"
          flexDir="column"
          alignItems="center"
      >
        <StyledWireframe height="20rem" width="20rem" />
        <Paragraph
          fSize="2rem"
        >
        A good UI / UX is essential
        </Paragraph>
      </Div>
      <Div
          display="flex"
          flexDir="column"
          alignItems="center"
      >
        <Specs height="20rem" width="20rem" />
        <Paragraph
          fSize="2rem"
        >
          Create a brand experience that is persuasive
        </Paragraph>
      </Div>
      </IntroGrid>
    </Intro>
  </Layout>
)

export default IndexPage
