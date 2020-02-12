import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import ContentBlock from "../components/ContentBlock"
import styled from 'styled-components'
import Card from "../components/Card"
import { graphql } from "gatsby" 
import Img from "gatsby-image" 

const ProjectsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 10px;
`

const AboutPage = ( { data } ) => (
  <Layout>
    <SEO title="Some ongoing relationships" />

    <Heading
      text="About us"
      Tag="h1"
    />

    <ContentBlock>
      <p>If you think we could help you, we would love to talk to you. Please call or send us an email.</p>
      <p>The kettle is always on...</p>
    </ContentBlock>

  </Layout>
)

export const query = graphql`
  query {
    imgAddition: file(relativePath: { eq: "projects/project_thumbnail_addition.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 535, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion: file(relativePath: { eq: "projects/project_thumbnail_notion.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 535, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  } 
  
`

export default AboutPage