import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mobile from '../assets/mobileapp.svg'
import Html from '../assets/html.svg'

//Technologies Icons
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

const ProjectsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-column: full-start/full-end;
`

const HeaderHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  justify-self: start;
`

const HeaderText = styled.p`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 10rem;
`

const StyledMobile = styled(Mobile)`
  justify-self: end;
`

const ProjectsGrid = styled.div`
  grid-column: center-start/center-end;
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

const TechName = styled.div`
  justify-self: center;
  align-self: center;
  font-weight: 400;
`

const Projects = () => (
  <Layout>
    <SEO title="Web Development Projects" />
    <ProjectsHeader>
      <StyledMobile height="30rem" width="30rem" />
      <HeaderHeading>
        Featured Projects
      </HeaderHeading>
    </ProjectsHeader>
    <ProjectsGrid>
      <HeaderText>
        Technologies
      </HeaderText>
      
      <TechGrid>
        <TechGridItem>
          <Html width="10rem" height="8rem" />
          <TechName>HTML</TechName>
        </TechGridItem>
        <TechGridItem>
          <CssLogo width="10rem" height="8rem" />
          <TechName>CSS</TechName>
        </TechGridItem>
        <TechGridItem>
          <Sass width="10rem" height="8rem" />
          <TechName>SASS</TechName>
        </TechGridItem>
        <TechGridItem>
          <Javascript width="10rem" height="8rem" />
          <TechName>JavaScript</TechName>
        </TechGridItem>
        <TechGridItem>
          <SCLogo width="10rem" height="8rem"  style={{fill: 'rgb(203,116,176)'}} />
          <TechName>Styled Components</TechName>
        </TechGridItem>
        <TechGridItem>
          {/* <RLogo width="10rem" height="8rem" /> */}
          <TechName>React</TechName>
        </TechGridItem>
        <TechGridItem>
          <GatLogo width="10rem" height="8rem" />
          <TechName>Gatsby</TechName>
        </TechGridItem>
        <TechGridItem>
          <Ruby width="10rem" height="8rem" />
          <TechName>Ruby</TechName>
        </TechGridItem>
        <TechGridItem>
          {/* <Rails width="10rem" height="8rem" /> */}
          <TechName>Ruby on Rails</TechName>
        </TechGridItem>
        <TechGridItem>
          {/* <PostgresLogo width="10rem" height="8rem" /> */}
          <TechName>PostgeSQL</TechName>
        </TechGridItem>
        <TechGridItem>
          {/* <Heroku width="10rem" height="8rem" /> */}
          <TechName>Heroku</TechName>
        </TechGridItem>
        <TechGridItem>
          {/* <Firebase width="10rem" height="8rem" /> */}
          <TechName>Firebase</TechName>
        </TechGridItem>
        <TechGridItem>
          {/* <Gql width="10rem" height="8rem" /> */}
          <TechName>GraphQL</TechName>
        </TechGridItem>
      </TechGrid>
    </ProjectsGrid>
  </Layout>
)

export default Projects
