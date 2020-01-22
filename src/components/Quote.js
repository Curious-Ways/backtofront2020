import React from "react"
import styled from 'styled-components'

const QuoteWrapper = styled.blockquote`

`
const QuoteSource = styled.cite`

`
const QuoteText = styled.p`

`

const Quote = props => (

  <QuoteWrapper>
    <QuoteSource>{props.source}</QuoteSource>
    <QuoteText>{props.text}</QuoteText>
  </QuoteWrapper>

)

export default Quote