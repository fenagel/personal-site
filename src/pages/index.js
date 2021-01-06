import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { keyframes } from "styled-components"

import Layout from "../components/layout"
import Button from '../styles/Button'
import Div from '../styles/Div'
import Paragraph from '../styles/Paragraph'
import Image from "../components/image"
import Code from "../assets/code.svg"
import Airplane from "../assets/aircraft.svg"
import Webdevices from "../assets/webdevices.svg"
import Wireframe from "../assets/wireframe.svg"
import Specs from "../assets/specs.svg"
import SEO from "../components/seo"

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const HeaderHome = styled.div`
  display: grid;
  grid-template-rows: repeat(3,minmax(min-content,max-content));
  grid-template-columns: minmax(6rem,1fr) minmax(50%,90rem) minmax(min-content,50rem) minmax(6rem,1fr);
  grid-column: full-start/full-end;
  align-content: center;
  justify-content: center;
  grid-row-gap: 1.5rem;
  grid-column-gap: 5%;
  height: 70vh;
  background-color: #292A2C;
  clip-path: ellipse(100% 50%);
`

const H1Header = styled.h1`
  font-size: 4rem;
  line-height: 1.1;
  grid-row: 1/2;
  grid-column: 2/3;
  animation: ${moveInLeft} 1s ease-out;
`

const H2Header = styled.h2`
  font-size: 3rem;
  grid-row: 2/3;
  line-height: 1.1;
  grid-column: 2/3;
  animation: ${moveInLeft} 1s ease-out;
`

const StyledButton = styled(Button)`
  grid-row: 4/5;
  grid-column: 2/3;
  align-self: start;
  justify-self: start;
  animation: ${moveInBottom} 1s ease-out;
`

const HeaderImage = styled.div`
  grid-row: 1/span 2;
  grid-column: 3/4;
  align-self: start;
  justify-self: center;
  animation: ${moveInRight} 1s ease-out;
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
      <H1Header>
        Creating awesome websites and helping you market them effectively online!
      </H1Header>
      <H2Header>
        I’d love to collaborate on a project. Don’t hesitate to reach out.
      </H2Header>
      <StyledButton as="a" href="/contact">
        Let's chat!
      </StyledButton>
      <HeaderImage>
       <Image />
      </HeaderImage>
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
