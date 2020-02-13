import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import ContentBlock from "../components/ContentBlock"
import { graphql } from "gatsby" 

import Helmet from 'react-helmet'

const AboutPage = ( { data } ) => (
  <Layout>

    <Helmet htmlAttributes={{class: 'page-about'}}/>

    <SEO title="Some ongoing relationships" />

    <ContentBlock>
    
      <Heading
        text="About us"
        Tag="h1"
      />

      <p>Vivamus efficitur tortor velit, at ultrices enim blandit sit amet. Ut ac mattis magna, vel sollicitudin augue. Proin sit amet finibus risus. Praesent pretium condimentum pretium. Proin maximus, quam in pretium cursus, turpis arcu mattis neque, at hendrerit justo sapien at turpis. Donec ultrices eu sem nec suscipit. Sed vel luctus mi. Suspendisse libero nisl, vulputate id vehicula et, interdum vel magna.</p>
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