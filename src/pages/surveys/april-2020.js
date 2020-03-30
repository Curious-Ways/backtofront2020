import React from "react"
import Layout from "../../components/App"
import SEO from "../../components/seo"
import ContentBlock from "../../components/ContentBlock"
import ButtonLink from "../../components/Button"
import Heading from "../../components/Heading"
import Helmet from 'react-helmet'
import { Link } from "gatsby"
import styled from 'styled-components'

const TextLink = styled(Link)`
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

    <Helmet htmlAttributes={{class: 'page-survey'}}/>

    <SEO
      title="Survey"
      description=""
    />

    <ContentBlock wide>

      <Heading
        text="Would you like to learn more about how to improve your digital presence and stand out online in the world of architecture?"
        tag="h1"
      />

      <p>Every company is unique, so for us to help we need to get a better understanding of how you work, that’s where you come in. We have devised a simple set of questions that could help to strengthen and improve your digital presence or help you to learn more about this ever-changing landscape.</p>

      <p><ButtonLink link="https://hello525330.typeform.com/to/jdLaMN" text="take our short survey"></ButtonLink></p>

      <p>The survey will only take 5 minutes to complete and if you provide us with your email address (you don't have to) we'll share all our findings from all of our surveys in the form of a final report.</p>
    
      <p>We will also send you <TextLink to="/back-chat">Back Chat,</TextLink> a monthly interview celebrating the people behind the buildings in a series of informal message chats. You can unsubscribe from this at any time but it’s well worth a look.</p>

      <p>If you would like to know more about Back to Front we would love to talk to you. Please <TextLink to="/contact">call or send us an email</TextLink>.</p>

    </ContentBlock>

  </Layout>
)

export default IndexPage