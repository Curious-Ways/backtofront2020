import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const CardWrapper = styled.div`
  a:link, a:visited {
    color: #fff;
  }
  a:hover, a:active, a:focus {

  }  
`
const CardText = styled.p`
  padding: 30px 40px 50px 0;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    padding: 30px 0;
    line-height: 1.5;
  }
`

const ImageWrap = styled.div`
  @media screen and (max-width: 767px) {
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }
`

const Card = props => (

  <CardWrapper>
    <Link to={props.link}>
      <ImageWrap>
        {props.children}
      </ImageWrap>
      <CardText>{props.text}</CardText>
    </Link>
  </CardWrapper>

)

export default Card