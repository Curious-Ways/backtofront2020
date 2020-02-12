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

const ProjectDogEar = ( { data } ) => (

  <Layout>
    
    <Helmet htmlAttributes={{class: 'project-dog-ear'}}/>

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

      <MediaQuery minDeviceWidth={768}>
        <Quote
          source={quoteSource}
          text={quoteText}
        />
      </MediaQuery>

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

    <MediaQuery maxDeviceWidth={767}>
      <Quote
        source={quoteSource}
        text={quoteText}
      />
    </MediaQuery>
       
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