import React from "react"
import { Router, Link } from '@reach/router'
import styled from "styled-components"
import { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

//Intro images and components
import Paragraph from '../styles/Paragraph'
import Image from "../components/image"

// SVGs
import Clock from '../assets/clock.svg'
import Branding from '../assets/branding.svg'
import Smartphone from '../assets/smartphone.svg'
import UserExp from '../assets/user-experience.svg'
import ProcessImage from '../assets/process.svg'

//Projects images
import Mobile from '../assets/mobileapp.svg'
import Code from '../assets/code.svg'
import Button from '../styles/Button'
import Tinyhouse from '../images/tinyhouse.png'
import Wyder from '../images/wyder.png'
import Natours from '../images/natours.png'
import Nexter from '../images/nexter.png'
import Pplpan from '../images/pplplan.png'

//Technologies Icons
import Html from '../assets/html.svg'
import CssLogo from '../assets/css.svg'
import Firebase from '../assets/firebase.svg'
import Gql from '../assets/graphql.svg'
import Heroku from '../assets/heroku.svg'
import GatLogo from '../assets/gatsby.svg'
import Javascript from '../assets/javascript.svg'
import PostgresLogo from '../assets/postgresql.svg'
import Rails from '../assets/rails.svg'
import RLogo from '../assets/reactlogo.svg'
import Ruby from '../assets/ruby.svg'
import Sass from '../assets/sass.svg'
import SCLogo from '../assets/styled-components.svg'

//About images
import Analytics from '../assets/analytics.svg'
import Social from '../assets/social.svg'
import Frameworks from '../assets/frameworks.svg'
import Teamwork from '../assets/teamwork.svg'

//Contact images
import Resume from '../assets/resume.svg'
import Email from '../assets/email.svg'
import Socials from '../assets/socials.svg'
import Map from '../assets/map.svg'

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

const HeaderHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  grid-column: full-start/full-end;
  justify-self: center;
  margin-bottom: 10rem;
  margin-top: 5rem;
`

const HeaderText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10rem;

  @media only screen and (max-width: 600px) {
    margin-bottom: 5rem;
  }
`

const StyledMobile = styled(Mobile)`
  justify-self: end;
`

const ProjectsGrid = styled.div`
  grid-column: center-start/center-end;
`

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 15rem;
  justify-items: center;
  align-items: center;
  margin-bottom: 15rem;

  @media only screen and (max-width: 600px) {
    grid-row-gap: 8rem;
    margin-bottom: 10rem;
  }
`

const Project = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`

const ProjectImage = styled.div`
  background: url(${props => props.background});
  width: 50rem;
  height: 50rem;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 5rem;

  @media only screen and (max-width: 600px) {
    width: 30rem;
    height: 30rem;
  }
`

const ProjectHeading = styled.h2`
  font-size: 3rem;
  @media only screen and (max-width: 500px) {
    font-size: 2rem;
    font-weight: 700;
  }
`

const ProjectText = styled.p`
  font-size: 2rem;
  justify-self: start;

  @media only screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`

const GitHubGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-column-gap: 2.5rem;
  align-items: center;
  justify-items: center;
  margin-bottom: 10rem;
  grid-column: center-start/center-end;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const StyledCode = styled(Code)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const GitHubDiv = styled.div`
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const GitHubText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 5rem;

  @media only screen and (max-width: 600px) {
    margin-bottom: 3rem;
  }
`

const TechGrid = styled.div`
  margin-bottom: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(18rem,1fr));
  grid-row-gap: 5rem;
  grid-column-gap: .805rem;

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit,minmax(13rem,1fr));
    justify-items: center;
  }
`

const TechGridItem = styled.div`
  display: grid;
  justify-self: center;
  justify-items: center;
  border-radius: 1.5rem;
  padding: 2rem;

  @media only screen and (max-width: 800px) {
    padding: 1rem;
  }
`

const TechName = styled.p`
  font-size: 1.6rem;
  justify-self: center;
  align-self: center;
  font-weight: 400;
  margin-top: 1rem;

  @media only screen and (max-width: 800px) {
    font-size: 1.2rem;
  }
`

const DotWrapper = styled.div`
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #c1c1c1;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #eaeaea;
  width: 100%;
`

const BrowserDot = styled.div`
  background-color: #264653;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  margin: 5px;
  box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.75);
`

const Dot1 = styled(BrowserDot)`
  background-color: rgba(52,58,64,.8);
`

const Dot2 = styled(BrowserDot)`
  background-color: rgba(52,58,64,.8);
`

const Dot3 = styled(BrowserDot)`
  background-color: rgba(52,58,64,.8);
`

const TechItem = styled.div`
  background: linear-gradient(to right bottom,rgba(108,117,125,.8),rgba(52,58,64,.8));
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 18rem;
  width: 18rem;

  @media only screen and (max-width: 800px) {
    width: 12rem;
    height: 14rem;
  }
`

const StyledHtml = styled(Html)`
  @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledCssLogo = styled(CssLogo)`
  @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledSass = styled(Sass)`
  @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledFirebase = styled(Firebase)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledGql = styled(Gql)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledHeroku = styled(Heroku)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledJavascript = styled(Javascript)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledPostgresLogo = styled(PostgresLogo)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledRails = styled(Rails)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledRLogo = styled(RLogo)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledRuby = styled(Ruby)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledSCLogo = styled(SCLogo)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const StyledGatLogo = styled(GatLogo)`
 @media only screen and (max-width: 800px) {
    width: 9rem;
    height: 7rem;
  }
`

const AboutBackground = styled.div`
  background-color: #45464A;
  margin-bottom: 5rem;
  grid-column: full-start/full-end;
`

const AboutHeader = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  justify-self: center;
`

const AboutWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-column: full-start/full-end;
  margin-bottom: 10rem;
  margin-top: 5rem;
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(7.5rem,1fr) repeat(2,45rem) minmax(7.5rem,1fr);
  margin-bottom: 10rem;
  justify-items: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 10rem 1fr 10rem;
    grid-row-gap: 5rem;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 5rem 1fr 5rem;
  }

`

const AboutDetailsLeft = styled.div`
  width: 80%;
  grid-column: 2/3;

  @media only screen and (max-width: 800px) {
    width: 100%;
    grid-column: 2/3;
    grid-row: 2/2;
  }
`

const AboutDetailsRight = styled.div`
  width: 80%;
  grid-column: 3/4;

  @media only screen and (max-width: 800px) {
    width: 100%;
    grid-column: 2/3;
  }
`

const StyledAnalytics = styled(Analytics)`
  grid-column: 2/3;
`

const StyledFrameworks = styled(Frameworks)`
  grid-column: 2/3;
`

const StyledTeamwork = styled(Teamwork)`
  grid-column: 3/4;
  @media only screen and (max-width: 800px) {
    grid-column: 2/3;
  }
`

const StyledSocial = styled(Social)`
  grid-column: 3/4;
  @media only screen and (max-width: 800px) {
    grid-column: 2/3;
  }
`

const AboutHeading = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 5rem;

  @media only screen and (max-width: 800px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 2rem;
  }
`

const AboutText = styled.p`
  font-size: 1.8rem;
  opacity: 0.9;
  font-weight: 300;

  @media only screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
`

const AboutList = styled.ul`
  font-size: 1.8rem;
  opacity: 0.9;
  font-weight: 300;

  @media only screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
`

const AboutLi = styled.li`
  margin-left: 5rem;
  font-size: 1.8rem;
  opacity: 0.9;
  font-weight: 300;

  @media only screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
`

const ContactMain = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  justify-self: center;
`

const ContactHeader = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-column: full-start/full-end;
  margin-bottom: 10rem;
`

const ContactGrid = styled.div`
  display: grid;
  grid-column: full-start/full-end;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, max-content);
  grid-row-gap: 10rem;
  align-items: start;
  justify-items: center;

  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

const ContactGridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 650px) {
    width: 60%;
    border-bottom: 1px solid #fff;
    padding-bottom: 5rem;
  }

  @media only screen and (max-width: 450px) {
    width: 80%;
  }
`

const ContactHeading = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 5rem;
`

const ContactText = styled.p`
  font-size: 1.8rem;
  opacity: 0.9;
  font-weight: 300;
`

const IndexPage = () => (
  <Layout>
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
    
    <HeaderHeading>
      Featured Projects
    </HeaderHeading>

    <ProjectsGrid>
      <ProjectWrapper>
        <Project>
          <ProjectImage background={Tinyhouse} as="a" href="https://tinyhouses.herokuapp.com/" />
          <ProjectHeading>
              Tinyhouses - AirBnB Clone
          </ProjectHeading>
          <ProjectText>
            WIP: Users can list their tinyhouse or book a trip to one of the tinyhouses
          </ProjectText>
          <ProjectText>
            Built with Ruby on Rails and hosted on Heroku
          </ProjectText>
        </Project>

        <Project>
          <ProjectImage background={Pplpan} as="a" href="https://tinyhouses.herokuapp.com/" />
          <ProjectHeading>
              The Peoples Plan - Mobile Game
          </ProjectHeading>
          <ProjectText>
            WIP: Influence local climate related policies with a gamified mobile website
          </ProjectText>
          <ProjectText>
            Backend API built with Ruby on Rails and a React frontend
          </ProjectText>
        </Project>

        <Project>
          <ProjectImage background={Wyder} as="a" href="http://www.wyder.xyz/" />
          <ProjectHeading>
              Wyder - University Video Platform
          </ProjectHeading>
          <ProjectText>
            2-week bootcamp project for prospective students searching for the right university.
          </ProjectText>
          <ProjectText>
            Built with Ruby on Rails and hosted on Heroku
          </ProjectText>
        </Project>

        <Project>
          <ProjectImage background={Natours} as="a" href="https://fenagel.github.io/nature-tours/" />
          <ProjectHeading>
              Nature Tours
          </ProjectHeading>
          <ProjectText>
            Different animations, such as background images, background videos and hover effects.
          </ProjectText>
          <ProjectText>
            Built with HTML and CSS
          </ProjectText>
        </Project>

        <Project>
          <ProjectImage background={Nexter} as="a" href="https://fenagel.github.io/nexter/" />
          <ProjectHeading>
              Nexter - Real Estate
          </ProjectHeading>
          <ProjectText>
            Real estate landing page, with different css-grid implementations for  and card design.
          </ProjectText>
          <ProjectText>
            Built with HTML and CSS
          </ProjectText>
        </Project>
      </ProjectWrapper>

      <HeaderText>
        View my Projects on GitHub
      </HeaderText>
      <GitHubGrid>
        <StyledCode width="30rem" height="30rem" />
        <GitHubDiv>
          <GitHubText>
            For those curious, feel free to explore my GitHub profile.
          </GitHubText>
          <Button as="a" href="https://github.com/fenagel">
            Explore now!
          </Button>
        </GitHubDiv>
      </GitHubGrid>

      <HeaderText>
        Technologies
      </HeaderText>

      <TechGrid>
        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledHtml width="10rem" height="8rem" />
            <TechName>HTML</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledCssLogo width="10rem" height="8rem" />
            <TechName>CSS</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledSass width="10rem" height="8rem" />
            <TechName>SASS</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledJavascript width="10rem" height="8rem" />
            <TechName>JavaScript</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledSCLogo width="10rem" height="8rem"  style={{fill: 'rgb(203,116,176)'}} />
            <TechName>Styled Components</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledRLogo width="10rem" height="8rem" />
            <TechName>React</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledGatLogo width="10rem" height="8rem" />
            <TechName>Gatsby</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledRuby width="10rem" height="8rem" />
            <TechName>Ruby</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledRails width="10rem" height="8rem" />
            <TechName>Ruby on Rails</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledPostgresLogo width="10rem" height="8rem" />
            <TechName>PostgeSQL</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledHeroku width="10rem" height="8rem" />
            <TechName>Heroku</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledFirebase width="10rem" height="8rem" />
            <TechName>Firebase</TechName>
          </TechGridItem>
        </TechItem>

        <TechItem>
          <DotWrapper>
            <Dot1 />
            <Dot2 />
            <Dot3 />
          </DotWrapper>
          <TechGridItem>
            <StyledGql width="10rem" height="8rem" />
            <TechName>GraphQL</TechName>
          </TechGridItem>
        </TechItem>
      </TechGrid>
    </ProjectsGrid>

    <AboutBackground>
    <AboutWrapper>
      <AboutHeader>About me</AboutHeader>
    </AboutWrapper>

    <AboutGrid>
      <StyledAnalytics width="25rem" height="25rem" />
      <AboutDetailsRight>
        <AboutHeading>I’m specialised in Google Ads and Google Analytics</AboutHeading>
        <AboutText>Services include:</AboutText>
        <AboutList>
          <AboutLi>Google Ads Account Setup</AboutLi>
          <AboutLi>Account optimisation</AboutLi>
          <AboutLi>Monitoring with Google Analytics</AboutLi>
        </AboutList>
      </AboutDetailsRight>
    </AboutGrid>
      
    <AboutGrid>
      <AboutDetailsLeft>
        <AboutHeading>I ran many YouTube campaigns in the past</AboutHeading>
        <AboutText>YouTube marketing is often overlooked. It is a great platform for branding if used correctly. I'm happy to support you to run successful YouTube campaigns.</AboutText>
      </AboutDetailsLeft>
      <StyledSocial width="25rem" height="25rem" style={{ color: '#fff'}} />
    </AboutGrid>

    <AboutGrid>
      <StyledFrameworks width="25rem" height="25rem" />
      <AboutDetailsRight>
        <AboutHeading>I enjoy building websites with the newest technologies</AboutHeading>
        <AboutText>I like to use modern JavaScript frameworks like React and to build backend APIs.</AboutText>
        <AboutText>The website can be connected to a CMS so that content can be easily updated.</AboutText>
      </AboutDetailsRight>
    </AboutGrid>

    <AboutGrid>
      <AboutDetailsLeft>
        <AboutHeading>I love pair programming and collaborating on projects</AboutHeading>
        <AboutText>Working with graphic designers, other devs or product managers is essential to achieve optimal results.</AboutText>
      </AboutDetailsLeft>
      <StyledTeamwork width="25rem" height="25rem" style={{ color: '#fff'}} />
    </AboutGrid>
    </AboutBackground>

    <ContactHeader>
      <ContactMain>Contact</ContactMain>
    </ContactHeader>
    <ContactGrid>
      <ContactGridItem>
        <ContactHeading>Download My CV</ContactHeading>
        <Resume width="20rem" height="20rem" style={{ marginBottom: '5rem'}}/>
        <Button as="a" href="https://drive.google.com/file/d/1ZfPIxlCoPjPx-lF7Uww46THdvhKSufXG/view?usp=sharing">Download now!</Button>
      </ContactGridItem>

      <ContactGridItem>
        <ContactHeading>Email me at <br></br>felixnagel105@gmail.com</ContactHeading>
        <Email width="20rem" height="20rem" />
      </ContactGridItem>

      <ContactGridItem>
        <ContactHeading>Let's connect on LinkedIn</ContactHeading>
        <Socials width="20rem" height="20rem" style={{ color: '#fff', marginBottom: '5rem'}} />
        <Button as="a" href="https://www.linkedin.com/in/fenagel/" >Connect!</Button>
      </ContactGridItem>

      <ContactGridItem>
        <ContactHeading>I'm located in Berlin</ContactHeading>
        <Map width="20rem" height="20rem" />
      </ContactGridItem>
    </ContactGrid>
  </Layout>
)

export default IndexPage
