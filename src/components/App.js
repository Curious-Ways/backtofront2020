/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "../fonts/fonts.css"
import styled, { keyframes }  from 'styled-components'
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SiteHeader from "./SiteHeader"
import SiteFooter from "./SiteFooter"

const fadeIn = keyframes`
  from { 
    opacity: 0; 
  }
  to { 
    opacity: 1; 
  }
`
const Site = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1070px;
  padding-right: 25px;
  padding-left: 25px;
`
const Main = styled.main`
  /* @keyframes duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name */
  animation: 0.75s ease-in 0.5s forwards ${fadeIn};
  opacity: 0;
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
          <Main>{children}</Main>
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
