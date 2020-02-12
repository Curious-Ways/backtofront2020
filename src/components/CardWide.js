import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const CardWrapper = styled.div`
  position: relative;

  a:link, a:hover {
    color: ${({ theme }) => theme.colorPurple};
  }
`
const CardTextWrap = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;
  max-width: 560px;
`
const CardText = styled.p`
  background: #fff;
  background: rgba(255, 255, 255, 0.9);
  display: inline;
  padding: 12px 8px;
  box-decoration-break: clone;
  line-height: 2.2;

`

const CardWide = props => (

  <CardWrapper>
    <Link to={props.link}>
      {props.children}
      <CardTextWrap>
        <CardText>{props.text}</CardText>
      </CardTextWrap>
    </Link>
  </CardWrapper>

)

export default CardWide