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

const ProjectPishedFish = ( { data } ) => (

  <Layout>

    <Helmet htmlAttributes={{class: 'project-pished-fish'}}/>

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

      <MediaQuery minDeviceWidth={768}>
        <Quote
          source={quoteSource}
          text={quoteText}
        />
      </MediaQuery>

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

    <MediaQuery maxDeviceWidth={767}>
      <Quote
        source={quoteSource}
        text={quoteText}
      />
    </MediaQuery>
       
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