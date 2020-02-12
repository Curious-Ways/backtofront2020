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

const servicesItems = ['Art Direction', 'Branding', 'Brand Strategy', 'Illustration', 'Print Design', 'Social Media', 'Website Build', 'Website Design'];

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

      <Quote
        source="Sanaz Amidi, CEO, Van Arts"
        text="B2F really took to the challenge of rebranding a visual arts organization where they needed to satisfy a panel of artists and designers. B2F were committed to the process and this was demonstrated in the bold and dynamic final outcomes- we couldn't be happier with the work produced and are continuing to work with them."
      />

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