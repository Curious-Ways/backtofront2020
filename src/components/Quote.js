import React from "react"
import styled from 'styled-components'

const QuoteWrapper = styled.blockquote`
  margin: 0;
  
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }  
`
const QuoteSource = styled.cite`
  display: block;
  font-family: AribauGrotesk-Bd, sans-serif;
  font-style: normal;
  margin-bottom: 20px;
`
const QuoteText = styled.p`
  position: relative;

  @media screen and (min-width: 768px) {
    &:before {
      color: ${({ theme }) => theme.colorLightBlue};
      content: "“";
      position: absolute;
      left: -35px;
      top: -7px;
      font-size: 65px;
      font-family: Georgia, 'Times New Roman', Times, serif;
    }
  }
`

const Quote = props => (

  <QuoteWrapper>
    <QuoteSource>{props.source}</QuoteSource>
    <QuoteText>{props.text}</QuoteText>
  </QuoteWrapper>

)

export default Quote