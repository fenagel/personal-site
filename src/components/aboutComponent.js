import React from "react"
import styled from "styled-components"

//SVGs
import Analytics from '../assets/analytics.svg'
import Social from '../assets/social.svg'
import Frameworks from '../assets/frameworks.svg'
import Teamwork from '../assets/teamwork.svg'

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

const AboutComponent = () => (
  <>
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
          <AboutText>I like using modern JavaScript frameworks like React and building backend APIs.</AboutText>
          <AboutText>The website can be connected to a CMS so that it is easy to update the content.</AboutText>
        </AboutDetailsRight>
      </AboutGrid>

      <AboutGrid>
        <AboutDetailsLeft>
          <AboutHeading>I love pair programming and collaborating on projects</AboutHeading>
          <AboutText>Working with graphic designers, other developers or product managers is essential to achieve optimal results.</AboutText>
        </AboutDetailsLeft>
        <StyledTeamwork width="25rem" height="25rem" style={{ color: '#fff'}} />
      </AboutGrid>
    </AboutBackground>
    
  </>
)

export default AboutComponent