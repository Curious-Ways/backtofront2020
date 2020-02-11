/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"
import "../fonts/fonts.css"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: AribauGrotesk-Rg, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a:link, a:visited {
    text-decoration: none;
    border-bottom: 1px solid red;
  }

  p {
    margin-top: 0;

      &:last-child {
        margin-bottom: 0
    }
  }
`
const Site = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1070px;
  padding-right: 25px;
  padding-left: 25px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <> 
      <GlobalStyle />
      <Site>
        <SiteHeader siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <SiteFooter />
      </Site>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
