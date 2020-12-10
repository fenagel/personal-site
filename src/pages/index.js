import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const H1 = styled.h1`
  font-size: 4.5rem;
  grid-column-start: 2;
  align-self: center;
`
const HeaderHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 7rem;
  align-items: center;
  height: 50vh;
  background-color: #292A2C;
  clip-path: ellipse(100% 50%);
`

const GridImage = styled(Image)`
  grid-column-start: 1;
`

const Intro = styled.div`
  margin-top: 20rem;
  font-size: 2rem;
  height: 20vh;
  background-color: #45464A;
  padding: 20rem;
  margin-top: -10rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderHome>
      <GridImage />
      <H1>Web Developer &<br></br>Online Marketing Specialist</H1>
    </HeaderHome>
    <Intro>
      <p>With my background online marketing & ecommerce I know what today's websites need to be marketable.</p>
    </Intro>
    <Link to="/projects/">Go to p</Link>
  </Layout>
)

export default IndexPage
