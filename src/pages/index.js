import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentBlockAnimated from "../components/ContentBlockAnimated"

const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />

    <ContentBlockAnimated

      description={[
        {
          text:'We design brands and we build websites for brand-new businesses, or businesses trying something brand-new.',
        },
        {
          text:'Our people are the very best at what they do, but our services are surprisingly affordable because of how we choose to work.',
        },
        {
          text:'We love what we do and are proud of our long term relationships; we continue to partner with all of the clients shown here.',
        },
      ]}
    />

  </Layout>
)

export default IndexPage
