import React from "react"
import styled from 'styled-components'

const ContentBlockWrap = styled.div`
  max-width: 500px;
  margin-bottom: 60px;
`

const ContentBlock = ( { children } ) => (

  <ContentBlockWrap>
    { children }
  </ContentBlockWrap>

)

export default ContentBlock