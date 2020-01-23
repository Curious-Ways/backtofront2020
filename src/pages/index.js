import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"
// import ServicesList from "../components/ServicesList"

// const items = ['a', 'b', 'c'];

const IndexPage = () => (
  <Layout>
    
    <SEO title="Home" />

    <PageTitle title="We design brands and we build websites" />

    {/* <ServicesList list={items} /> */}
    
    <Footer />
  </Layout>
)

export default IndexPage
