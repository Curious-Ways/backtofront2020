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

const ProjectDogEar = ( { data } ) => (

  <Layout>

    <SEO title="Dog Ear" />

    <ProjectText>

      <ProjectOverview
        title="Dog Ear"
        text="We renamed, branded and launched an online accountancy firm in only eight weeks."
        linkName="rosettaarts.org"
        linkURL="https://rosettaarts.org"
        >

        <ServicesList list={servicesItems} />

      </ProjectOverview>

      <Quote
        source="Sanaz Amidi, CEO, DogEar Arts"
        text="B2F really took to the challenge of rebranding a visual arts organization where they needed to satisfy a panel of artists and designers. B2F were committed to the process and this was demonstrated in the bold and dynamic final outcomes- we couldn't be happier with the work produced and are continuing to work with them."
      />

    </ProjectText>

    <ProjectGallery>
      <Img
        fluid={data.imgDogEar1.childImageSharp.fluid}
        alt="Dog Ear"
      />
      <Img
        fluid={data.imgDogEar2.childImageSharp.fluid}
        alt="Dog Ear"
      />
      <Img
        fluid={data.imgDogEar3.childImageSharp.fluid}
        alt="Dog Ear"
      />
      <Img
        fluid={data.imgDogEar4.childImageSharp.fluid}
        alt="Dog Ear"
      />
      <Img
        fluid={data.imgDogEar5.childImageSharp.fluid}
        alt="Dog Ear"
      />            
    </ProjectGallery>
   
    <Pagination
      linkBefore="/projects/van"
      linkMore="/projects/addition"
    />

  </Layout>
)

export const query = graphql`
  query {
    imgDogEar1: file(relativePath: { eq: "projects/project_gallery_dog_ear_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgDogEar2: file(relativePath: { eq: "projects/project_gallery_dog_ear_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgDogEar3: file(relativePath: { eq: "projects/project_gallery_dog_ear_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgDogEar4: file(relativePath: { eq: "projects/project_gallery_dog_ear_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgDogEar5: file(relativePath: { eq: "projects/project_gallery_dog_ear_5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },        
  } 
  
`

export default ProjectDogEar