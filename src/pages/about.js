import React from "react"
import Layout from "../components/App"
import SEO from "../components/seo"
import Heading from "../components/Heading"
import { graphql } from "gatsby" 
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from "gatsby-image" 
import ContentBlock from "../components/ContentBlock"
import ServicesList from "../components/ServicesList"
const servicesItems = ['Website design', 'Website build', 'Brand strategy', 'Visual identity', 'Design for print', 'Design for screen', 'Copywriting', 'Illustration', 'Packaging', 'Animation', 'Photography', 'Merchandise' ];

const AboutLink = styled.a`
  &:link, &:visited {
    color: #fff;
    padding-bottom: 1px;
    border-bottom: 2px solid ${({ theme }) => theme.colorLightBlue};
  }
  &:hover, &:active, &:focus {
    color: ${({ theme }) => theme.colorLightBlue};
  }
`
const HeadshotsWrapper = styled.div `
  @media (min-width: 480px) {
    display: flex;
    margin: 0 -10px 60px;
  }
`

const David = styled.div `
@media (min-width: 480px) {
    flex: 1;
    margin: 0 5px;
  }
`

const Pete = styled.div `
  margin: 40px 0 0;

@media (min-width: 480px) {
    flex: 1;
    margin: 0 5px;
  }
`

const CaptionWrapper = styled.div `
  text-align: center;
  margin-top: 10px;
`

const Caption = styled.small `
  display: inline-block;
  margin-top: 20px;
  position: relative;

  span {
    position: absolute;
    top: -3px;
    right: -14px;
    color: ${({ theme }) => theme.colorLightBlue};
  }
`

const AboutPage = ( { data } ) => (
  <Layout>

    <Helmet htmlAttributes={{class: 'page-about'}}/>

    <SEO 
      title="About"
      description="We have collective experience of 30 years working with clients including Sony, Nokia, Cadburys, BBC, ITV, British Red Cross and the Tate"
    />

    <Heading
      text="About us"
      tag="h1"
    />

    <p>B2F was founded by <AboutLink href="https://www.linkedin.com/in/davidflindall/">David Flindall</AboutLink> and <AboutLink href="https://www.linkedin.com/in/mr-pete-lewis-51468049/">Pete Lewis</AboutLink>.</p>

    <ContentBlock>
      <p>We have collective experience of 30 years working with clients including Sony, Nokia, Cadburys, BBC, ITV, British Red Cross and the Tate just to name a few.</p>
    </ContentBlock>

    <HeadshotsWrapper>
      <David>
        <Img
          fluid={data.imgAddition.childImageSharp.fluid}
          alt="David Flindall, Back to Front Co-founder"
        />
        <CaptionWrapper>
          <Caption>This is David <span>&uarr;</span></Caption>
        </CaptionWrapper>
      </David>
      <Pete>
        <Img
          fluid={data.imgNotion.childImageSharp.fluid}
          alt="Pete Lewis, Back to Front Co-founder"
        />
        <CaptionWrapper>
          <Caption>And this is Pete <span>&uarr;</span></Caption>
        </CaptionWrapper>
      </Pete>
    </HeadshotsWrapper>

    <ContentBlock>
      <p>We hand-pick our team especially for your brief using our tried-and-trusted network of talent: designers, developers, writers, animators and everything in between. People we respect, admire, and know we work well with, picked with you in mind.</p>
    </ContentBlock>

    <ContentBlock>
      <ServicesList 
        list={servicesItems} 
        title="What we create"
      />
    </ContentBlock>

    <ContentBlock>
      <p>If you think we could help, we would love to talk and see if we can make the right team for you. Please <AboutLink href="tel:+447870583147">call</AboutLink> or <AboutLink href="mailto:hello@backtofront.co">send us an email</AboutLink>.</p>
    </ContentBlock>

  </Layout>
)

export const query = graphql`
  query {
    imgAddition: file(relativePath: { eq: "david_flindall_back_to_front_co_founder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 518, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion: file(relativePath: { eq: "pete_lewis_back_to_front_co_founder.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 518, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  } 
  
`

export default AboutPage