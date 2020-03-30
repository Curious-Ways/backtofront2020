import React from "react"
import styled from 'styled-components'

const Button = styled.a`

    display: inline-block;
    background: #fff;
    font-size: 16px;
    padding: .7rem 1rem .5rem;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 2.67px;
    text-align: center;

    &:link, &:visited {
      color: ${({ theme }) => theme.colorPurple};
    }

    &:hover, &:active, &:focus {
      background: ${({ theme }) => theme.colorLightBlue};
    } 
  
`

const ButtonLink = props => (

  <Button href={props.link}>
    {props.text}
  </Button>

)

export default ButtonLink