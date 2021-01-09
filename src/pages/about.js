import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"


import Analytics from '../assets/analytics.svg'
import Social from '../assets/social.svg'

const HeaderHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  justify-self: center;
`

const AboutHeader = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-column: full-start/full-end;
  margin-bottom: 10rem;
`

const AboutGrid = styled.div`
  display: grid;
  grid-column: center-start/center-end;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10rem;
  justify-items: center;
  align-items: center;
`

const AboutDetails = styled.div`

`

const AboutHeading = styled.h2`
  font-size: 3rem;
  margin-bottom: 5rem;
`

const AboutText = styled.p`
  font-size: 1.8rem;
`

const AboutList = styled.ul`
  font-size: 1.8rem;
`

const AboutLi = styled.li`
  margin-left: 5rem;
`

const About = () => (
  <Layout>
    <SEO title="About me - web dev & online marketing" />
    <AboutHeader>
      <HeaderHeading>About me</HeaderHeading>
    </AboutHeader>

    <AboutGrid>
      <Analytics width="25rem" height="25rem" />
      <AboutDetails>
        <AboutHeading>I’m specialised in Google Ads and Google Analytics</AboutHeading>
        <AboutText>Services include:</AboutText>
        <AboutList>
          <AboutLi>Google Ads Account Setup</AboutLi>
          <AboutLi>Account optimisation</AboutLi>
          <AboutLi>Monitoring with Google Analytics</AboutLi>
        </AboutList>
      </AboutDetails>
    </AboutGrid>
      
    <AboutGrid>
      <AboutDetails>
        <AboutHeading>I ran many YouTube advertising campaigns in the past</AboutHeading>
        <AboutText>I’m happy to consult on effective YouTube campaigns.</AboutText>
      </AboutDetails>
      <Social width="25rem" height="25rem" style={{ color: '#fff'}} />

    </AboutGrid>


    
  </Layout>
)

export default About