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

const ProjectNotion = ( { data } ) => (

  <Layout>

    <SEO title="Notion" />

    <ProjectText>

      <ProjectOverview
        title="Notion"
        text="We renamed, branded and launched an online accountancy firm in only eight weeks."
        linkName="notion.online"
        linkURL="https://notion.online"
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
        fluid={data.imgNotion1.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion2.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion3.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion4.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion5.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion6.childImageSharp.fluid}
        alt="Notion"
      />            
    </ProjectGallery>
   
    <Pagination
      linkBefore="/projects/rosetta-arts"
      linkMore="/projects/pished-fish"
    />

  </Layout>
)

export const query = graphql`
  query {
    imgNotion1: file(relativePath: { eq: "projects/project_gallery_notion_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion2: file(relativePath: { eq: "projects/project_gallery_notion_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion3: file(relativePath: { eq: "projects/project_gallery_notion_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion4: file(relativePath: { eq: "projects/project_gallery_notion_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion5: file(relativePath: { eq: "projects/project_gallery_notion_5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion6: file(relativePath: { eq: "projects/project_gallery_notion_6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },       
  } 
  
`

export default ProjectNotion