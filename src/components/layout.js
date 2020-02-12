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
    background-blend-mode: color-burn;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: linear-gradient(180deg, #302AB8 0%, #302AB8 25%, #2AAAB2 100%);
    
    &.project-addition {
      background-image: linear-gradient(180deg, #302AB8 11%, #00DCA1 100%);
    }
    &.project-dog-ear {
      background-image: linear-gradient(180deg, #302AB8 12%, #242424 82%);
    }
    &.project-notion {
      background-image: linear-gradient(180deg, #302AB8 11%, #000000 100%);
    }
    &.project-pished-fish {
      background-image: linear-gradient(180deg, #302AB8 11%, #FF8725 100%);
    }
    &.project-rosetta {
      background-image: linear-gradient(180deg, #302AB8 11%, #C80E5C 100%);
    }
    &.project-van {
      background-image: linear-gradient(180deg, #302AB8 12%, #0E2C1F 82%);
    }
    &.project-zenden {
      background-image: linear-gradient(180deg, #302AB8 11%, #7361F5 100%);
    }
  }
  body {
    color: #fff;
    min-height: 100vh;
    margin: 0;
    font-size: 22px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  img {
    display: block;
  }
  a:link, a:visited {
    text-decoration: none;
    transition: 0.5s all;
    /*padding-bottom: 1px;
    border-bottom: 2px solid #1DD5E1; */
  }
  a:hover, a:active, a:focus {
    /*color: #1DD5E1;*/ 
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
