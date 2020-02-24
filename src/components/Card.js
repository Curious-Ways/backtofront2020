import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"


const CardTextWrap = styled.div`
  padding: 30px 40px 50px 0;

  @media screen and (max-width: 767px) {
    padding: 30px 0;
  }
`
const CardText = styled.p`

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.5;
  }
`
const ImageWrap = styled.div`
  @media screen and (max-width: 767px) {
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }
`
const CardLink = styled(Link) `
  &:link, &:visited {
    color: #fff;
  }
  &:hover, &:active, &:focus {
    color: ${({ theme }) => theme.colorLightBlue};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`
const Card = props => (

  <div>
    <Link to={props.link}>
      <ImageWrap>
        {props.children}
      </ImageWrap>
    </Link>
    
    <CardTextWrap>
      <CardText>
        {props.text}  
      </CardText>
      <CardLink to={props.link}>View Project &rarr;</CardLink>
    </CardTextWrap>
    
  </div>

)

export default Card