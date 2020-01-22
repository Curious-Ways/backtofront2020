import React from "react"
import styled from 'styled-components'

const CardWrapper = styled.div`

`
const CardImg = styled.img`

`
const CardLink = styled.a`

`
const CardText = styled.p`

`

const Card = props => (

  <CardWrapper>
    <CardLink>
      <CardImg />
      <CardText>{props.text}</CardText>
    </CardLink>  
  </CardWrapper>

)

export default Card