import React from "react"
import Layout from "../components/App"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import ContentBlock from "../components/ContentBlock"
import styled from 'styled-components'
import Card from "../components/Card"
import { graphql } from "gatsby" 
import Img from "gatsby-image" 
import Helmet from 'react-helmet'

const ProjectsWrap = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProjectsPage = ( { data } ) => (
  <Layout>

    <Helmet htmlAttributes={{class: 'page-relationships'}}/>

    <SEO title="Some ongoing relationships" />

    <ContentBlock>

      <Heading 
        tag="h1"
        text="Some ongoing relationships"
      />

      <p>If you think we could help you, we would love to talk to you. Please call or send us an email.</p>
      <p>The kettle is always on...</p>
    </ContentBlock>

    <Heading 
      tag="h2"
      text="All the projects below are existing clients"
    />

    <ProjectsWrap>
      <Card
        text="We partnered with a New York mortgage disruptor to go from prodcut idea to market within ten weeks"
        link="/projects/zenden"
        >
        <Img
          fluid={data.imgZenden.childImageSharp.fluid}
          alt="Zenden"
        />
      </Card>
      <Card
        text="We made a smoked salmon company leap from garden shed hobby to the shelves of Harrods, Selfridges &amp; Waitrose"
        link="/projects/pished-fish"
        >
        <Img
          fluid={data.imgPishedfish.childImageSharp.fluid}
          alt="Pished Fish"
        />
      </Card>
      <Card
        text="We renamed, branded and launched an online accountancy firm in only eight weeks."
        link="/projects/addition"
        >
        <Img
          fluid={data.imgAddition.childImageSharp.fluid}
          alt="Addition"
        />
      </Card>
      <Card
        text="We re-launched Notion’s digitial offerings. Helping to double their online readership in less than a year"
        link="/projects/notion"
        >
        <Img
          fluid={data.imgNotion.childImageSharp.fluid}
          alt="Notion"
        />
      </Card>
    </ProjectsWrap>

  </Layout>
)

export const query = graphql`
  query {
    imgAddition: file(relativePath: { eq: "projects/project_thumbnail_addition.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 535, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion: file(relativePath: { eq: "projects/project_thumbnail_notion.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 535, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgPishedfish: file(relativePath: { eq: "projects/project_thumbnail_pished_fish.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 535, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgZenden: file(relativePath: { eq: "projects/project_thumbnail_zenden.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 535, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },    
  } 
  
`

export default ProjectsPage