import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ImgDiv = styled.div`
  max-width: 30rem;
  margin-bottom: 1.45rem;
`
const H1 = styled.h1`
  font-size: 4.5rem;
`
const HeaderHome = styled.div`
  display: flex;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeaderHome>
      <H1>Web Developer &<br></br>Online Marketing Specialist</H1>
    </HeaderHome>
      <ImgDiv>
        <Image />
      </ImgDiv>
    <Link to="/projects/">Go to p</Link>
  </Layout>
)

export default IndexPage
