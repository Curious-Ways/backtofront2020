import React from "react"
import Layout from "../../components/Layout"
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

const ProjectVan = ( { data } ) => (

  <Layout>

    <Helmet htmlAttributes={{class: 'project-van'}}/>  

    <SEO title="Van" />

    <ProjectText>

      <ProjectOverview
        title="Van"
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
        fluid={data.imgVan1.childImageSharp.fluid}
        alt="Van"
      />
      <Img
        fluid={data.imgVan2.childImageSharp.fluid}
        alt="Van"
      />
      <Img
        fluid={data.imgVan3.childImageSharp.fluid}
        alt="Van"
      />
    </ProjectGallery>

    <MediaQuery maxDeviceWidth={767}>
      <Quote
        source={quoteSource}
        text={quoteText}
      />
    </MediaQuery>

    <Pagination
      linkBefore="/projects/pished-fish"
      linkMore="/projects/dog-ear"
    />

  </Layout>
)

export const query = graphql`
  query {
    imgVan1: file(relativePath: { eq: "projects/project_gallery_van_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgVan2: file(relativePath: { eq: "projects/project_gallery_van_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgVan3: file(relativePath: { eq: "projects/project_gallery_van_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgVan4: file(relativePath: { eq: "projects/project_gallery_van_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgVan5: file(relativePath: { eq: "projects/project_gallery_van_5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },        
  } 
  
`

export default ProjectVan