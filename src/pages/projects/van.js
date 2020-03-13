import React from "react"
import Layout from "../../components/App"
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

const servicesItems = ['Art Direction', 'Branding', 'Brand Strategy', 'Print Design', 'Packaging Design', 'Photography', 'Website Build', 'Website Design'];
const quoteSource = ['Tatiana Van Lancker, Founder, VAN'];
const quoteText = ['B2F have been pivotal in helping me create a brand identity based on a complex dichotomy: elegant fine jewellery that is also fun and playful, classic and contemporary. They are also a joy to work with, always accommodating and helpful.'];

const ProjectVan = ( { data } ) => (

  <Layout>

    <Helmet htmlAttributes={{class: 'project-van'}}/>  

    <SEO 
      title="Van"
      description="We brought to life a clients creative vision to launch a brand new product into the luxury jewellery market"
    />

    <ProjectText>

      <ProjectOverview
        title="Van"
        text="We brought to life a creative vision to launch a brand new product into the luxury jewellery market."
        linkName="van-robot.com"
        linkURL="https://van-robot.org"
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

    <MediaQuery maxWidth={767}>
      <Quote
        source={quoteSource}
        text={quoteText}
      />
    </MediaQuery>

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