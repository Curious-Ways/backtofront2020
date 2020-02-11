import React from "react"
import styled from 'styled-components'

const ImagesWrapper = styled.div`
  div:not(:last-child) {
    margin-bottom: 10px;
  }
`

const ProjectGallery = props => (

  <ImagesWrapper>
    {props.children}
  </ImagesWrapper>

)

export default ProjectGallery

