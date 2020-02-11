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

const ProjectPishedFish = ( { data } ) => (

  <Layout>

    <SEO title="Pished Fish" />

    <ProjectText>

      <ProjectOverview
        title="Pished Fish"
        text="We renamed, branded and launched an online accountancy firm in only eight weeks."
        linkName="thepishedfish.com"
        linkURL="https://www.thepishedfish.com/"
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
        fluid={data.imgPishedFish1.childImageSharp.fluid}
        alt="PishedFish"
      />
      <Img
        fluid={data.imgPishedFish2.childImageSharp.fluid}
        alt="PishedFish"
      />
      <Img
        fluid={data.imgPishedFish3.childImageSharp.fluid}
        alt="PishedFish"
      />
      <Img
        fluid={data.imgPishedFish4.childImageSharp.fluid}
        alt="PishedFish"
      />
    </ProjectGallery>
   
    <Pagination
      linkBefore="/projects/notion"
      linkMore="/projects/van"
    />

  </Layout>
)

export const query = graphql`
  query {
    imgPishedFish1: file(relativePath: { eq: "projects/project_gallery_pished_fish_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgPishedFish2: file(relativePath: { eq: "projects/project_gallery_pished_fish_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgPishedFish3: file(relativePath: { eq: "projects/project_gallery_pished_fish_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgPishedFish4: file(relativePath: { eq: "projects/project_gallery_pished_fish_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  } 
  
`

export default ProjectPishedFish