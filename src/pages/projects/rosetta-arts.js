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

const servicesItems = ['Art Direction', 'Branding', 'Brand Strategy', 'Illustration', 'Print Design', 'Social Media', 'Website Build', 'Website Design'];

const ProjectRosetta = ( { data } ) => (

  <Layout>

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

      <Quote
        source="Sanaz Amidi, CEO, Rosetta Arts"
        text="B2F really took to the challenge of rebranding a visual arts organization where they needed to satisfy a panel of artists and designers. B2F were committed to the process and this was demonstrated in the bold and dynamic final outcomes- we couldn't be happier with the work produced and are continuing to work with them."
      />

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