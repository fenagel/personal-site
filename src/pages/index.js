import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { keyframes } from "styled-components"

import Layout from "../components/layout"
import Button from '../styles/Button'
import Div from '../styles/Div'
import Paragraph from '../styles/Paragraph'
import Image from "../components/image"
import SEO from "../components/seo"
import Clock from '../assets/clock.svg'
import Branding from '../assets/branding.svg'
import Smartphone from '../assets/smartphone.svg'
import UserExp from '../assets/user-experience.svg'

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
  background-color: #292a2c;
  height: 70vh;
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
  padding-bottom: 10rem;
  grid-column: full-start/full-end;
`

const IntroHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin: 10rem;
`

const WebsiteFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: center-start/center-end;
  margin: 0 15rem;
  justify-items: center;
  align-items: center;
  animation: ${moveInLeft} 2s ease-out;
`
const Feature = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: 2rem;
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
      <IntroHeading>
        With my background online marketing & ecommerce<br></br>I know what today's websites need to be marketable.
      </IntroHeading>
      <WebsiteFeatures>
        <Feature>
          <Clock width="15rem" height="15rem" style={{ fill: '#FFC25B' }} />
          <Paragraph fSize="2rem">
            Fast loading times!
          </Paragraph>
        </Feature>
        <Feature>
          <UserExp width="15rem" height="15rem" style={{ fill: '#FFC25B' }} />
          <Paragraph fSize="2rem">
            Clear UI / UX
          </Paragraph>
        </Feature>
        <Feature>
          <Smartphone width="15rem" height="15rem" style={{ fill: '#FFC25B' }} />
          <Paragraph fSize="2rem">
            Responsive for every screen
          </Paragraph>
        </Feature>
        <Feature>
          <Branding width="15rem" height="15rem" style={{ fill: '#FFC25B' }} />
          <Paragraph fSize="2rem">
            Persuasive brand experience
          </Paragraph>
        </Feature>
      </WebsiteFeatures>
    </Intro>
  </Layout>
)

export default IndexPage
