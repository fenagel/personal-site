import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Div = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Div>
      <Image />
    </Div>
    <Link to="/projects/">Go to projects</Link>
  </Layout>
)

export default IndexPage
