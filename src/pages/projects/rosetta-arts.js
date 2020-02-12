import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby" 
import Img from "gatsby-image" 
import ProjectOverview from "../../components/ProjectOverview"
import ProjectGallery from "../../components/ProjectGallery"
import ProjectText from "../../components/ProjectText"
import ServicesList from "../../components/ServicesList"
import Quote from "../../components/Quote"
import Pagination from "../../components/Pagination"
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'

const servicesItems = ['Art Direction', 'Branding', 'Brand Strategy', 'Illustration', 'Print Design', 'Social Media', 'Website Build', 'Website Design'];
const quoteSource = ['Art'];
const quoteText = ['yo'];

const ProjectRosetta = ( { data } ) => (

  <Layout>

    <Helmet htmlAttributes={{class: 'project-rosetta'}}/>

    <SEO title="Rosetta" />

    <ProjectText>

      <ProjectOverview
        title="Rosetta"
        text="We renamed, branded and launched an online accountancy firm in only eight weeks."
        linkName="rosettaarts.org"
        linkURL="https://rosettaarts.org"
        >

        <ServicesList list={servicesItems} />

      </ProjectOverview>

      <MediaQuery minDeviceWidth={768}>
        <Quote
          source={quoteSource}
          text={quoteText}
        />
      </MediaQuery>

    </ProjectText>

    <ProjectGallery>
      <Img
        fluid={data.imgRosetta1.childImageSharp.fluid}
        alt="Rosetta"
      />
      <Img
        fluid={data.imgRosetta2.childImageSharp.fluid}
        alt="Rosetta"
      />
      <Img
        fluid={data.imgRosetta3.childImageSharp.fluid}
        alt="Rosetta"
      />
    </ProjectGallery>

    <MediaQuery maxDeviceWidth={767}>
      <Quote
        source={quoteSource}
        text={quoteText}
      />
    </MediaQuery>
       
    <Pagination
      linkBefore="/projects/zenden"
      linkMore="/projects/notion"
    />

  </Layout>
)

export const query = graphql`
  query {
    imgRosetta1: file(relativePath: { eq: "projects/project_gallery_rosetta_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgRosetta2: file(relativePath: { eq: "projects/project_gallery_rosetta_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgRosetta3: file(relativePath: { eq: "projects/project_gallery_rosetta_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  } 
  
`

export default ProjectRosetta