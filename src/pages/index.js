import React from "react"
import Layout from "../components/App"
import SEO from "../components/seo"
import ContentBlock from "../components/ContentBlock"
import CardWide from "../components/CardWide"
import { graphql } from "gatsby" 
import Img from "gatsby-image" 
import styled from 'styled-components'
import Heading from "../components/Heading"
import Helmet from 'react-helmet'
import { Link } from "gatsby"

const ProjectsGroup = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
`
const ProjectsGroupTitle = styled(Heading)`
  padding-top: 20px;
`

const AboutLink = styled(Link)`
  &:link, &:visited {
    color: #fff;
    padding-bottom: 1px;
    border-bottom: 2px solid ${({ theme }) => theme.colorLightBlue};
  }
  &:hover, &:active, &:focus {
    color: ${({ theme }) => theme.colorLightBlue};
  }
`

const IndexPage = (  { data } ) => (

  <Layout>

    <Helmet htmlAttributes={{class: 'page-home'}}/>

    <SEO 
      title="We design brands and we build websites"
      description="We hand-pick our team for your brief using our network of talented designers, developers, writers, animators and everything in between"
    />

    <ContentBlock center> 

      <Heading
        text="Fresh from working at top agencies across big and small brands, we built Back to Front to do things differently - build a remote team of highly creative people that collaborate on projects to deliver a whole creative package woven through from concept to audience"
        tag="h1"
      />

      <Heading
        text="How we do it"
        tag="h2"
      />

      <p>Design quality branding that tells a fluid and coherent narrative online and off</p>
      <p>Create coherent tools to help you deliver a whole creative package woven through from concept to audience</p>
      <p>Maintain relationships with our clients and continue to help them grow</p>
      <p>Provide innovative ways of working remotely, virtually and in person</p>

      <p>Read more about <AboutLink to="/about/">how we choose to work</AboutLink></p>

      <p>Get in touch to talk about your project</p>
    
    </ContentBlock>

    <Heading
      text="Some clients"
      tag="h2"
    />

    ITV
    Garden Museum
    BBC
    Donald Insall
    Engenutii
    Hal Leonard Europe
    Sophie Dahl
    


    <ProjectsGroupTitle
      text="Recent projects"
      tag="h1"
    />

    <ProjectsGroup>
      <CardWide
        text="We partnered with a New York mortgage disruptor to go from MVP to market within ten weeks"
        link="/projects/zenden"
        >
        <Img
          fluid={data.imgZenden.childImageSharp.fluid}
          alt="Zenden"
        />
      </CardWide>
      <CardWide
        text="We made a smoked salmon company leap from garden shed hobby to the shelves of Harrods, Selfridges &amp; Waitrose"
        link="/projects/pished-fish"
        >
        <Img
          fluid={data.imgPishedfish.childImageSharp.fluid}
          alt="Pished Fish"
        />
      </CardWide>
      <CardWide
        text="We re-launched Notion’s digitial offerings. Helping to double their online readership in less than a year"
        link="/projects/notion"
        >
        <Img
          fluid={data.imgNotion.childImageSharp.fluid}
          alt="Notion"
        />
      </CardWide>
    </ProjectsGroup>

  </Layout>
)

export const query = graphql`
  query {
    imgZenden: file(relativePath: { eq: "projects/project_gallery_zenden_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion: file(relativePath: { eq: "projects/project_gallery_notion_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgPishedfish: file(relativePath: { eq: "projects/project_gallery_pished_fish_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  } 
  
`

export default IndexPage