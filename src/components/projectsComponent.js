import React from "react"
import styled from "styled-components"

import Mobile from "../assets/mobileapp.svg"
import Code from "../assets/code.svg"
import Button from "../styles/Button"

//Project images
import Tinyhouse from "../images/tinyhouse.png"
import Wyder from "../images/wyder.png"
import Baldovin from "../images/Baldovin.png"
import Nexter from "../images/nexter.png"
import Pplpan from "../images/pplplan.png"

//Technologies Icons
import Html from "../assets/html.svg"
import CssLogo from "../assets/css.svg"
import Firebase from "../assets/firebase.svg"
import Gql from "../assets/graphql.svg"
import Heroku from "../assets/heroku.svg"
import GatLogo from "../assets/gatsby.svg"
import Javascript from "../assets/javascript.svg"
import PostgresLogo from "../assets/postgresql.svg"
import Rails from "../assets/rails.svg"
import RLogo from "../assets/reactlogo.svg"
import Ruby from "../assets/ruby.svg"
import Sass from "../assets/sass.svg"
import SCLogo from "../assets/styled-components.svg"

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
  width: 40rem;
  height: 40rem;
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
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-row-gap: 5rem;
  grid-column-gap: 0.805rem;

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
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
  background-color: rgba(52, 58, 64, 0.8);
`

const Dot2 = styled(BrowserDot)`
  background-color: rgba(52, 58, 64, 0.8);
`

const Dot3 = styled(BrowserDot)`
  background-color: rgba(52, 58, 64, 0.8);
`

const TechItem = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(108, 117, 125, 0.8),
    rgba(52, 58, 64, 0.8)
  );
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

const ProjectsComponent = () => (
  <>
    <HeaderHeading>Featured Projects</HeaderHeading>

    <ProjectsGrid>
      <ProjectWrapper>
        <Project>
          <ProjectImage
            background={Tinyhouse}
            as="a"
            href="https://tinyhouses.herokuapp.com/"
          />
          <ProjectHeading>Tinyhouses - AirBnB Clone</ProjectHeading>
          <ProjectText>
            WIP: Users can list their tinyhouse or book a trip to one of the
            tinyhouses. Users have a dashboard to view their upcoming trips or
            manage their listings.
          </ProjectText>
          <ProjectText>
            Built with Ruby on Rails and hosted on Heroku
          </ProjectText>
        </Project>

        <Project>
          <ProjectImage
            background={Pplpan}
            as="a"
            href="https://game.peoplesplan.org/"
          />
          <ProjectHeading>The Peoples Plan - Mobile Website</ProjectHeading>
          <ProjectText>
            WIP: Designed and developed a gamified survey app for The People’s
            Plan, a global collaborative community trying to find innovative
            solutions to the climate crisis. Not designed for desktop!
          </ProjectText>
          <ProjectText>
            Backend API built with Ruby on Rails and a React frontend
          </ProjectText>
        </Project>

        <Project>
          <ProjectImage
            background={Baldovin}
            as="a"
            href="https://baldovinphotography.com/"
          />
          <ProjectHeading>Baldovin Photography</ProjectHeading>
          <ProjectText>
            Website for a freelance photographer to showcase some of her work.
            Images are optimized with Gatsby Image components and hosted on the
            headless Contentful CMS.
          </ProjectText>
          <ProjectText>Built with GatsbyJS, Sass and Contentful.</ProjectText>
        </Project>

        <Project>
          <ProjectImage
            background={Wyder}
            as="a"
            href="http://www.wyder.xyz/"
          />
          <ProjectHeading>Wyder - University Video Platform</ProjectHeading>
          <ProjectText>
            2-week bootcamp project for prospective students searching for the
            right university. Visitors can filter results based on subject,
            degree and location. Users can view bookmarked university programmes
            in a dashboard.
          </ProjectText>
          <ProjectText>
            Built with Ruby on Rails and hosted on Heroku
          </ProjectText>
        </Project>

        <Project>
          <ProjectImage
            background={Nexter}
            as="a"
            href="https://fenagel.github.io/nexter/"
          />
          <ProjectHeading>Nexter - Real Estate</ProjectHeading>
          <ProjectText>
            Real estate landing page, with different css-grid implementations
            for and card design. Css-grid concepts included are grid layouts for
            entire page layouts, applying css-grid to image gallerys and card
            structure.
          </ProjectText>
          <ProjectText>Built with HTML and CSS</ProjectText>
        </Project>
      </ProjectWrapper>

      <HeaderText>View my Projects on GitHub</HeaderText>
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

      <HeaderText>Technologies</HeaderText>

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
            <StyledSCLogo
              width="10rem"
              height="8rem"
              style={{ fill: "rgb(203,116,176)" }}
            />
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
  </>
)

export default ProjectsComponent
