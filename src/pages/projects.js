import React from "react"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mobile from '../assets/mobileapp.svg'
import Code from '../assets/code.svg'
import Button from '../styles/Button'

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

const ProjectsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-column: full-start/full-end;
  margin-bottom: 10rem;
`

const HeaderHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  justify-self: start;
`

const HeaderText = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10rem;
`

const StyledMobile = styled(Mobile)`
  justify-self: end;
`

const ProjectsGrid = styled.div`
  grid-column: center-start/center-end;
`

const GitHubGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-column-gap: 2.5rem;
  align-items: center;
  justify-items: center;
  margin-bottom: 10rem;
`

const GitHubDiv = styled.div`

`

const GitHubText = styled.p`
  font-size: 1.8rem;
  margin-bottom: 5rem;
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
  justify-items: center;
  background-image: linear-gradient(to right bottom,rgba(108,117,125,.8),rgba(52,58,64,.8));
  width: 17rem;
  height: 15rem;
  border-radius: 1.5rem;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.4);
  padding: 1.5rem;
`

const TechName = styled.p`
  font-size: 1.6rem;
  justify-self: center;
  align-self: center;
  font-weight: 400;
  margin-top: 1rem;
`

const Projects = () => (
  <Layout>
    <SEO title="Web Development Projects" />
    <ProjectsHeader>
      <StyledMobile height="35rem" width="35rem" />
      <HeaderHeading>
        Featured Projects
      </HeaderHeading>
    </ProjectsHeader>

    <ProjectsGrid>
      <HeaderText>
        View my Projects on GitHub
      </HeaderText>
      <GitHubGrid>
        <Code width="30rem" height="30rem" />
        <GitHubDiv>
          <GitHubText>
            For those curious, feel free to explore my GitHub profile.
          </GitHubText>
          <Button as="a" href="www.github.com/fenagel">
            Explore now!
          </Button>
        </GitHubDiv>
      </GitHubGrid>

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
          <RLogo width="10rem" height="8rem" />
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
          <Rails width="10rem" height="8rem" />
          <TechName>Ruby on Rails</TechName>
        </TechGridItem>
        <TechGridItem>
          <PostgresLogo width="10rem" height="8rem" />
          <TechName>PostgeSQL</TechName>
        </TechGridItem>
        <TechGridItem>
          <Heroku width="10rem" height="8rem" />
          <TechName>Heroku</TechName>
        </TechGridItem>
        <TechGridItem>
          <Firebase width="10rem" height="8rem" />
          <TechName>Firebase</TechName>
        </TechGridItem>
        <TechGridItem>
          <Gql width="10rem" height="8rem" />
          <TechName>GraphQL</TechName>
        </TechGridItem>
      </TechGrid>

    </ProjectsGrid>
  </Layout>
)

export default Projects
