import React from "react"
import styled from "styled-components"
import { keyframes } from "styled-components"

import Button from '../styles/Button'
import Paragraph from '../styles/Paragraph'
import Image from "../components/image"

// SVGs
import Clock from '../assets/clock.svg'
import Branding from '../assets/branding.svg'
import Smartphone from '../assets/smartphone.svg'
import UserExp from '../assets/user-experience.svg'
import ProcessImage from '../assets/process.svg'

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

  @media only screen and (max-width: 750px) {
    height: 50vh;
  }
  
`

const H1Header = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  grid-row: 1/2;
  grid-column: 2/3;
  animation: ${moveInLeft} 1s ease-out;

  @media only screen and (max-width: 900px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 800px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 750px) {
    grid-column: 2/4;
    animation: ${moveInBottom} 1s ease-out;
    animation-fill-mode: backwards;
  }
}
`

const H2Header = styled.h2`
  font-size: 3rem;
  grid-row: 2/3;
  line-height: 1.1;
  grid-column: 2/3;
  animation: ${moveInLeft} 1s ease-out;

  @media only screen and (max-width: 800px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 750px) {
    grid-column: 2/4;
    animation: ${moveInBottom} 1s ease-out;
    animation-fill-mode: backwards;
  }
`

const StyledButton = styled(Button)`
  grid-row: 4/5;
  grid-column: 2/3;
  align-self: start;
  justify-self: start;
  animation: ${moveInBottom} 1s ease-out;

  @media only screen and (max-width: 750px) {
    grid-column: 2/4;
    animation: ${moveInLeft} 1s ease-out;
    animation-fill-mode: backwards;
  }
`

const HeaderImage = styled.div`
  grid-row: 1/span 2;
  grid-column: 3/4;
  align-self: start;
  justify-self: center;
  animation: ${moveInRight} 1s ease-out;

  @media only screen and (max-width: 750px) {
   display: none;
  }
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
  margin-top: 15rem;
  margin-bottom: 10rem;
  margin-left: 10rem;
  margin-right: 10rem;

  @media only screen and (max-width: 750px) {
   font-size: 2rem;
   margin-left: 6rem;
   margin-right: 6rem;
   margin-top: 10rem;
   margin-bottom: 5rem;
   text-align: left;
  }

  @media only screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`

const WebsiteFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5rem;
  grid-column: center-start/center-end;
  margin: 0 10rem;
  justify-items: center;
  align-items: center;
  animation: ${moveInLeft} 2s ease-out;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 5rem;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Feature = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: 2rem;
`

const Process = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10rem;
  align-items: center;
  margin: 0 10rem;

  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-row-gap: 5rem;
    justify-items: center;
  }

  @media only screen and (max-width: 500px) {
    margin: 0 5rem;
  }
`

const StyledProcessImage = styled(ProcessImage)`
  @media only screen and (max-width: 500px) {
    width: 25rem !important;
    height: 25rem !important;
  }
`

const ProcessSteps = styled.div`
  
`

const ProcessStep = styled.div`
  display: flex;
  margin-bottom: 3rem;
`

const StepNumber = styled.p`
  font-size: 4rem;
  font-weight: 700;
  margin-right: 5rem;

  @media only screen and (max-width: 500px) {
    font-size: 3rem;
  }
`

const StepDetails = styled.div``

const StepHeading = styled.h3`
  font-size: 2rem;
  font-weight: 700;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`

const StepText = styled.p`
  font-size: 1.6rem;
  opacity: 0.85;
`

const IntroComponent = () => (
  <>
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
        With my background online marketing & ecommerce I know what today's websites need to be marketable
      </IntroHeading>
      <WebsiteFeatures>
        <Feature>
          <Clock width="15rem" height="15rem" style={{ fill: '#FFC25B' }} />
          <Paragraph fSize="2rem" textAlign="center" >
            Fast loading times!
          </Paragraph>
        </Feature>
        <Feature>
          <UserExp width="15rem" height="15rem" style={{ fill: '#FFC25B' }} />
          <Paragraph fSize="2rem" textAlign="center">
            Clear UI / UX
          </Paragraph>
        </Feature>
        <Feature>
          <Smartphone width="15rem" height="15rem" style={{ fill: '#FFC25B' }} />
          <Paragraph fSize="2rem" textAlign="center">
            Responsive for every screen
          </Paragraph>
        </Feature>
        <Feature>
          <Branding width="15rem" height="15rem" style={{ fill: '#FFC25B' }} />
          <Paragraph fSize="2rem" textAlign="center">
            Persuasive brand experience
          </Paragraph>
        </Feature>
      </WebsiteFeatures>
      <IntroHeading>
        My Process for Building Good Websites
      </IntroHeading>
      <Process>
        <StyledProcessImage width="40rem" height="40rem" />
        <ProcessSteps>
          <ProcessStep>
            <StepNumber>01</StepNumber>
            <StepDetails>
            <StepHeading>Content</StepHeading>
              <StepText>
                The content strategy will inform the design choices for the website.
                Important things to cover are user stories, value propositions and visitor anticipations
              </StepText>
            </StepDetails>
          </ProcessStep>
          
          <ProcessStep>
            <StepNumber>02</StepNumber>
            <StepDetails>
            <StepHeading>Design & Develop</StepHeading>
              <StepText>
                Wireframes, images and animations have to be perfected before development starts
              </StepText>
            </StepDetails>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>03</StepNumber>
            <StepDetails>
            <StepHeading>Test & Deploy</StepHeading>
              <StepText>
                Testing in order to discover bugs is an important step before the website is deployed
              </StepText>
            </StepDetails>
          </ProcessStep>

          <ProcessStep>
            <StepNumber>04</StepNumber>
            <StepDetails>
            <StepHeading>Conversation</StepHeading>
              <StepText>
                Regular feedback and revisions are part of the process. Communication is essential to understand the requirements for each website
              </StepText>
            </StepDetails>
          </ProcessStep>
          
        </ProcessSteps>
      </Process>
    </Intro>
  </>
)

export default IntroComponent
