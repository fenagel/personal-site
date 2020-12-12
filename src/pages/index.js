import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import Code from "../assets/code.svg"
import Airplane from "../assets/aircraft.svg"
import Webdevices from "../assets/webdevices.svg"
import Wireframe from "../assets/wireframe.svg"
import Specs from "../assets/specs.svg"
import SEO from "../components/seo"

const H1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.7;
  grid-column-start: 2;
  align-self: center;
`

const HeaderHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2rem;
  align-items: center;
  justify-items: center;
  height: 50vh;
  background-color: #292A2C;
  clip-path: ellipse(100% 50%);
`

const GridImage = styled.div`
  grid-column-start: 1;
  text-align: center;
  font-size: 3rem;
`

const Intro = styled.div`
  margin-top: 20rem;
  background-color: #45464A;
  padding-top: 20rem;
  margin-top: -10rem;
`

// const IntroDiv = styled.div`
//   display: grid;
//   grid-template-columns: 1.5fr 1fr;
//   grid-column-gap: 10rem;
//   margin-bottom: 10rem;
//   margin-top: 10rem;
// `

const IntroDiv = styled.div(props => ({
  display: props.display,
  marginLeft: props.ml,
  marginRight: props.mr,
  marginBottom: props.mb,
  marginTop: props.mt,
  paddingTop: props.pt,
  padding: props.padding,
  gridTemplateColumns: props.gridTempCol,
  gridColumnGap: props.gridColGap,
  justifyItems: props.justifyItems,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
  textAlign: props.textAlign
}))


const IntroText = styled.p(props => ({
  fontSize: props.fSize,
  fontFamily: props.fFamily,
  lineHeight: props.lineHeight,
  marginLeft: props.ml,
  marginRight: props.mr,
  gridColumn: props.gridCol,
  alignSelf: props.alignSelf,
  justifySelf: props.justifySelf,
  textAlign: props.textAlign
}))

const IntroGrid = styled.div`
  font-size: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: start;
  margin-bottom: 5rem;
`

const StyledCode = styled(Code)`
  transform: translate(-10%, 20%);
`

const StyledPlane = styled(Airplane)`
  justify-self: center;
  margin-left: 10rem;
`

const StyledDevices = styled(Webdevices)`
  justify-self: center;
`

const StyledDesign = styled(Wireframe)`
  margin-left: 10rem;
  justify-self: center;
`

const StyledSpecs = styled(Specs)`
  justify-self: center;
`



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderHome>
      <GridImage>
        <Image />
        <p>Felix Nagel</p>
      </GridImage>
      <H1>Web Developer &<br></br>Online Marketing Specialist</H1>
    </HeaderHome>
    <Intro>
      <IntroDiv
        display="grid"
        gridTempCol="2fr 1fr"
        gridColGap="10rem"
        mb="15rem"
      >
        <IntroText
          fSize= "2.5rem"
          fFamily= "Varela Round"
          lineHeight= "1.7"
          ml= "10rem"
          gridCol= "1 / 1"
          alignSelf= "center"
        >
        With my background online marketing & ecommerce I know what today's websites need to be marketable.
        </IntroText>
        <StyledCode height="30rem" width="30rem" />
      </IntroDiv>
      <IntroGrid>
        <StyledPlane height="30rem" width="30rem" />
        <IntroText
          fSize="2.5rem"
          justifySelf="center"
        >
        Fast load times are a top priority!
        </IntroText>
      </IntroGrid>
      <IntroGrid>
        <IntroText
          fSize="2.5rem"
          ml="10rem"
        >
        Websites should be responsive for every screen
        </IntroText>
        <StyledDevices height="30rem" width="30rem" />
      </IntroGrid>
      <IntroGrid>
        <StyledDesign height="30rem" width="30rem" />
        <IntroText
          fSize="2.5rem"
          justifySelf="center"
        >
        A good UI / UX is essential
        </IntroText>
      </IntroGrid>
      <IntroGrid>
        <IntroText
          fSize="2.5rem"
          ml="10rem"
          justifySelf="center"
        >
          Create a brand experience that is persuasive
        </IntroText>
        <StyledSpecs height="30rem" width="30rem" />
      </IntroGrid>
    </Intro>
    <Link to="/projects/">Go to p</Link>
  </Layout>
)

export default IndexPage
