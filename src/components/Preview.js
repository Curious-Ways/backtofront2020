import React from "react"
import styled from 'styled-components'

const PreviewWrapper = styled.div`

`
const PreviewImg = styled.img`

`
const PreviewLink = styled.a`

`
const PreviewText = styled.p`

`

const Quote = props => (

  <PreviewWrapper>
    <PreviewLink>
      <PreviewImg />
      <PreviewText>{props.text}</PreviewText>
    </PreviewLink>  
  </PreviewWrapper>

)

export default Quote