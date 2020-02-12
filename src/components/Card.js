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
`

const Card = props => (

  <CardWrapper>
    <Link to={props.link}>
      {props.children}
      <CardText>{props.text}</CardText>
    </Link>
  </CardWrapper>

)

export default Card