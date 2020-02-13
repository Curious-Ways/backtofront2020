import React from "react"
import styled from 'styled-components'

const ContentWrapper = styled.div`

  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
  }
`

const ProjectText = props => (

  <ContentWrapper>
    {props.children}
  </ContentWrapper>

)

export default ProjectText

