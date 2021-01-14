import React from "react"
import { Router, Link } from '@reach/router'
import styled from "styled-components"
import { keyframes } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import IntroComponent from '../components/introComponent'
import ProjectsComponent from '../components/projectsComponent'
import AboutComponent from '../components/aboutComponent'
import ContactComponent from '../components/contactComponent'



const IndexPage = () => (
  <Layout>
    <SEO title="Web Development Homepage" />
    <IntroComponent />
    <ProjectsComponent />
    <AboutComponent />
    <ContactComponent />
  </Layout>
)

export default IndexPage
