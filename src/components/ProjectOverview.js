import React from "react"
import Heading from "../components/Heading"
import styled from 'styled-components'

const ContentWrapper = styled.div`
  max-width: 450px;
  margin-bottom: 40px;

  @supports (display: grid) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }

  a:link, a:visited {
    color: #fff;
    padding-bottom: 1px;
    border-bottom: 2px solid ${({ theme }) => theme.colorLightBlue};
  }
  a:hover, a:active, a:focus {
    color: ${({ theme }) => theme.colorLightBlue};
  }  
`
const StyledLink = styled.a`
  display: inline-block;
  margin-bottom: 5px;
`

const ProjectOverview = props => (

  <ContentWrapper>

    <Heading
      text={props.title}
      tag="h1"
    />

    <p>{props.text}</p>

    <StyledLink rel="noopener noreferrer" target="_blank" href={props.linkURL}>{props.linkName}</StyledLink><br />

    { props.link2Name && <StyledLink rel="noopener noreferrer" target="_blank" href={props.link2URL}>{props.link2Name}</StyledLink> }

    {props.children}

  </ContentWrapper>

)

export default ProjectOverview

