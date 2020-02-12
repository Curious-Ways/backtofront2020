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

const ProjectAddition = ( { data } ) => (

  <Layout>

    <Helmet htmlAttributes={{class: 'project-addition'}}/>

    <SEO title="Addition" />

    <ProjectText>

      <ProjectOverview
        title="Addition"
        text="We renamed, branded and launched an online accountancy firm in only eight weeks."
        linkName="additionaccounting.com"
        linkURL="https://additionaccounting.com"
        >

        <ServicesList list={servicesItems} />

      </ProjectOverview>

      <Quote
        source="Sanaz Amidi, CEO, Rosetta Arts"
        text="B2F really took to the challenge of rebranding a visual arts organization where they needed to satisfy a panel of artists and designers. B2F were committed to the process and this was demonstrated in the bold and dynamic final outcomes- we couldn't be happier with the work produced and are continuing to work with them."
      />

    </ProjectText>

    <ProjectGallery>
      <Img
        fluid={data.imgAddition1.childImageSharp.fluid}
        alt="Addition"
      />
      <Img
        fluid={data.imgAddition2.childImageSharp.fluid}
        alt="Addition"
      />
      <Img
        fluid={data.imgAddition3.childImageSharp.fluid}
        alt="Addition"
      />
      <Img
        fluid={data.imgAddition4.childImageSharp.fluid}
        alt="Addition"
      />
    </ProjectGallery>
   
    <Pagination
      linkBefore="/projects/dog-ear"
      linkMore="/projects/zenden"
    />

  </Layout>
)

export const query = graphql`
  query {
    imgAddition1: file(relativePath: { eq: "projects/project_gallery_addition_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgAddition2: file(relativePath: { eq: "projects/project_gallery_addition_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgAddition3: file(relativePath: { eq: "projects/project_gallery_addition_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgAddition4: file(relativePath: { eq: "projects/project_gallery_addition_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },    
  } 
  
`

export default ProjectAddition