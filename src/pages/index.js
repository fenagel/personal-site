import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Div from '../styles/Div'
import Heading from '../styles/Heading'
import Button from '../styles/Button'
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
  grid-template-rows: repeat(3,minmax(min-content,max-content));
  grid-template-columns: minmax(6rem,1fr) minmax(50%,90rem) minmax(min-content,50rem) minmax(6rem,1fr);
  grid-column: full-start/full-end;
  align-content: center;
  justify-content: center;
  grid-row-gap: 1.5rem;
  grid-column-gap: 5%;
  height: 90vh;
  background-color: #292A2C;
  clip-path: ellipse(100% 50%);
`

const Intro = styled.div`
  background-color: #45464A;
  padding-top: 25rem;
  margin-top: -15rem;
  padding-bottom: 10rem;
  grid-column: full-start/full-end;
`

const IntroGrid = styled.div`
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
      <Heading
        fSize="4rem"
        lineHeight="1.6"
        gridRow="1/2"
        gridColumn="2/3"
        
      >
        Creating awesome websites and helping you market them effectively online!
      </Heading>
      <Heading
        fSize="3rem"
        gridRow="2/3"
        gridColumn="2/3"
      >
        Don't hesitate to reach out and have a chat with me.
      </Heading>
      <Button
        fSize="2rem"
        color="#fff"
        background="#FFC25B"
        width="20rem"
        height="6rem"
        borderRadius="25px"
        gridRow="4/5"
        gridColumn="2/3"
        alignSelf="start"
        justifySelf="start"
      >
        Let's collaborate!
      </Button>
      <Div
        gridRow="1/span 2"
        gridCol="3/4"
        alignSelf="start"
        justifySelf="center"
      >
       <Image />
      </Div>
    </HeaderHome>
    <Intro>
      <Div
        display="grid"
        gridTempCol="2fr 1fr"
        gridColGap="5rem"
        ml="20rem"
        mr="20rem"
        mb="15rem"
        justifyItems="center"
        gridCol="center-start/center-end"
      >
        <Paragraph
          fSize= "3rem"
          fWeight="700"
        >
        With my background online marketing & ecommerce I know what today's websites need to be marketable.
        </Paragraph>
        <Code height="20rem" width="20rem" />
      </Div>
      <IntroGrid>
        <Div
          display="grid"
          justifyItems="center"
        >
          <StyledAirplane height="20rem" width="20rem" />
          <Paragraph
            fSize="2rem"
          >
          Fast load times are a top priority!
          </Paragraph>
        </Div>
        <Div
          display="grid"
          justifyItems="center"
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
          display="grid"
          justifyItems="center"
        >
        <StyledWireframe height="20rem" width="20rem" />
        <Paragraph
          fSize="2rem"
        >
        A good UI / UX is essential
        </Paragraph>
      </Div>
      <Div
          display="grid"
          justifyItems="center"
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
