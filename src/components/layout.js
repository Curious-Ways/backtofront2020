/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"
import "../fonts/fonts.css"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from '../global';
import { theme } from '../theme';

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
    <ThemeProvider theme={theme}>
      <> 
        <GlobalStyles />
        <Site>
          <SiteHeader siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <SiteFooter />
        </Site>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
