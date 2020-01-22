import React from "react"
import styled from 'styled-components'

const PageTitleWrapper = styled.header`
  margin-bottom: 40px;
`

const Title = styled.h1`
  margin: 0;
`

const PageTitle = props => (

  <PageTitleWrapper>
    <Title>{props.title}</Title>
  </PageTitleWrapper>

)

export default PageTitle