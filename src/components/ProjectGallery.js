import React from "react"
import styled from 'styled-components'

const ImagesWrapper = styled.div`

  @media screen and (max-width: 767px) {
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }

  div {
    margin-bottom: 10px;

    &:last-child {
      @media screen and (max-width: 767px) {
        margin-bottom: 40px;
      }
    }
  }
`

const ProjectGallery = props => (

  <ImagesWrapper>
    {props.children}
  </ImagesWrapper>

)

export default ProjectGallery

