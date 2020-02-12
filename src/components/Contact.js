import React from "react"
import styled from 'styled-components'

const ContactWrapper = styled.div`

`
const City = styled.h3`
  font-family: AribauGrotesk-Bd, sans-serif;
  margin: 0 0 10px;
`
const Timezone = styled.p`
  margin: 0;
`
const Email = styled.a`

`
const Phone = styled.a`
  margin: 0;
  display: block;
`

const Contact = props => (

  <ContactWrapper>
    <City>{props.city}</City>
    <Timezone>{props.timezone}</Timezone>
    <Email href={props.email_address}>{props.email_address}</Email>
    <Phone href={props.phone}>{props.phone}</Phone>
  </ContactWrapper>

)

export default Contact