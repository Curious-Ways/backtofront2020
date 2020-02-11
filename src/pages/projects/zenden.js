import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql, Link } from "gatsby" 
import Img from "gatsby-image" 
import ProjectOverview from "../../components/ProjectOverview"
import ProjectGallery from "../../components/ProjectGallery"
import ProjectText from "../../components/ProjectText"
import ServicesList from "../../components/ServicesList"
import Quote from "../../components/Quote"
import Pagination from "../../components/Pagination"

const servicesItems = ['Art Direction', 'Branding', 'Brand Strategy', 'Illustration', 'Print Design', 'Social Media', 'Website Build', 'Website Design'];

const ProjectZenden = ( { data } ) => (

  <Layout>

    <SEO title="Zenden" />

    <ProjectText>

      <ProjectOverview
        title="Zenden"
        text="We renamed, branded and launched an online accountancy firm in only eight weeks."
        linkName="usezenden.com"
        linkURL="https://usezenden.com"
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
        fluid={data.imgZenden1.childImageSharp.fluid}
        alt="Zenden"
      />
      <Img
        fluid={data.imgZenden2.childImageSharp.fluid}
        alt="Zenden"
      />
      <Img
        fluid={data.imgZenden3.childImageSharp.fluid}
        alt="Zenden"
      />
      <Img
        fluid={data.imgZenden4.childImageSharp.fluid}
        alt="Zenden"
      />
      <Img
        fluid={data.imgZenden5.childImageSharp.fluid}
        alt="Zenden"
      />
      <Img
        fluid={data.imgZenden6.childImageSharp.fluid}
        alt="Zenden"
      />            
    </ProjectGallery>
   
    <Pagination
      linkBefore="/projects/addition"
      linkMore="/projects/rosetta-arts"
    />

  </Layout>
)

export const query = graphql`
  query {
    imgZenden1: file(relativePath: { eq: "projects/project_gallery_zenden_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgZenden2: file(relativePath: { eq: "projects/project_gallery_zenden_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgZenden3: file(relativePath: { eq: "projects/project_gallery_zenden_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgZenden4: file(relativePath: { eq: "projects/project_gallery_zenden_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgZenden5: file(relativePath: { eq: "projects/project_gallery_zenden_5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgZenden6: file(relativePath: { eq: "projects/project_gallery_zenden_6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },       
  } 
  
`

export default ProjectZenden