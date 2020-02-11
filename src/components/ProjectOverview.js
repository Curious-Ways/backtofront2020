import React from "react"
import Heading from "../components/Heading"
import styled from 'styled-components'

const ContentWrapper = styled.div`
  margin-bottom: 60px;
`

const ProjectOverview = props => (

  <ContentWrapper>

    <Heading
      text={props.title}
      Tag="h1"
    />

    <p>{props.text}</p>

    <a target="_blank" href={props.linkURL}>{props.linkName}</a>

    {props.children}

  </ContentWrapper>

)

export default ProjectOverview

