import React from "react"
import Layout from "../components/App"
import SEO from "../components/seo"
import { graphql } from "gatsby" 
import styled from 'styled-components'
import Heading from "../components/Heading"
import Helmet from 'react-helmet'
import { Link } from "gatsby"
import ContentBlockGif from "../components/ContentBlockGif"

const AboutLink = styled(Link)`
  &:link, &:visited {
    color: #fff;
    padding-bottom: 1px;
    border-bottom: 2px solid ${({ theme }) => theme.colorLightBlue};
  }
  &:hover, &:active, &:focus {
    color: ${({ theme }) => theme.colorLightBlue};
  }
`

const IndexPage = (  { data } ) => (

  <Layout>

    <Helmet htmlAttributes={{class: 'page-home'}}/>

    <SEO 
      title="We design brands and we build websites"
      description="We hand-pick our team for your brief using our network of talented designers, developers, writers, animators and everything in between"
    />

    <ContentBlockGif> 

      <Heading
        text="Farewell to Back to Front and thank you to all who sailed with us."
        tag="h1"
      />
      <p>We are now on to pastures new and are working with the lovely people <AboutLink href="https://curiousways.com">Curious Ways</AboutLink>.</p>

    </ContentBlockGif>

  </Layout>
)

export const query = graphql`
  query {
    imgZenden: file(relativePath: { eq: "projects/project_gallery_zenden_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion: file(relativePath: { eq: "projects/project_gallery_notion_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgPishedfish: file(relativePath: { eq: "projects/project_gallery_pished_fish_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  } 
  
`

export default IndexPage