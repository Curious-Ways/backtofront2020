import React from "react"
import styled from 'styled-components'

const ContentWrapper = styled.div`
`

const BrandedWrapper = children => (

  <ContentWrapper>
    { children }
  </ContentWrapper>

)

export default BrandedWrapper