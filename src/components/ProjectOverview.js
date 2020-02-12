import React from "react"
import Heading from "../components/Heading"
import styled from 'styled-components'

const ContentWrapper = styled.div`
  margin-bottom: 60px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }

  a:link, a:visited {
    color: #fff;
    padding-bottom: 1px;
    border-bottom: 2px solid #1DD5E1;   
  }
  a:hover, a:active, a:focus {
    color: #1DD5E1;
  }  
`

const ProjectOverview = props => (

  <ContentWrapper>

    <Heading
      text={props.title}
      Tag="h1"
    />

    <p>{props.text}</p>

    <a rel="noopener noreferrer" target="_blank" href={props.linkURL}>{props.linkName}</a>

    {props.children}

  </ContentWrapper>

)

export default ProjectOverview

