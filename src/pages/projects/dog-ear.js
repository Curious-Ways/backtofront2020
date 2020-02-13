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

const servicesItems = ['Art Direction', 'Branding', 'Brand Strategy', 'Print Design', 'Website Build', 'Website Design'];
const quoteSource = ['It\'s Nice That'];
const quoteText = ['This micro-mag folds out into a readable page and folds up into a nifty bookmark. It’s a brilliantly innovative format (that takes its name from the unsightly habbit of folding page corners) and makes good use of a very small space.'];

const ProjectDogEar = ( { data } ) => (

  <Layout>
    
    <Helmet htmlAttributes={{class: 'project-dog-ear'}}/>

    <SEO title="Dog Ear Magazine" />

    <ProjectText>

      <ProjectOverview
        title="Dog Ear"
        text="A magazine that’s also a bookmark that grew from a side-project to a company backed by Margaret Atwood."
        linkName="dogearmagazine.com"
        linkURL="https://dogearmagazine.com"
        >

        <ServicesList list={servicesItems} />

      </ProjectOverview>

      <MediaQuery minWidth={768}>
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

    <MediaQuery maxWidth={767}>
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