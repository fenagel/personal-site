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

const TechGrid = styled.div`
  margin-bottom: 10rem;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(18rem,1fr));
  grid-row-gap: 5rem;
  grid-column-gap: .805rem;
`

const TechGridItem = styled.div`
  display: grid;
  justify-self: center;
  background-image: linear-gradient(to right bottom,rgba(108,117,125,.8),rgba(52,58,64,.8));
  width: 16rem;
  height: 14rem;
  border-radius: 1.5rem;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.4);
  padding: 1.5rem;
`

const TechLogo = styled.div`
  justify-self: center;
  align-self: center;
  width: 10rem;
  height: 8rem;
`

const TechName = styled.div`
  justify-self: center;
  align-self: center;
  font-weight: 400;
`

const Projects = () => (
  <Layout>
    <SEO title="Web Development Projects" />
    <Div
      display="grid"
      gridTempCol="1fr 1fr"
      alignItems="center"
      justifyItems="center"
      gridCol="full-start/full-end"

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
    <Div
      gridCol="center-start/center-end"
    >
      <Paragraph
        fSize="3rem"
        textAlign="center"
        mb="10rem"
      >
      Technologies
      </Paragraph>
    
    <TechGrid>
      <TechGridItem>
        <TechName>HTML</TechName>
      </TechGridItem>
      <TechGridItem>
      <TechName>CSS</TechName>
      </TechGridItem>
      <TechGridItem>
      <TechName>SASS</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>Styled Components</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>JavaScript</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>React</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>Gatsby</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>Ruby</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>Ruby on Rails</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>PostgeSQL</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>Heroku</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>Firebase</TechName>
      </TechGridItem>
      <TechGridItem>
        <TechName>GraphQL</TechName>
      </TechGridItem>
    </TechGrid>
    </Div>
  </Layout>
)

export default Projects
