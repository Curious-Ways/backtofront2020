import React from "react"
import styled from 'styled-components'

const ContactWrapper = styled.div`

`
const City = styled.h3`
  margin: 0;
`
const Timezone = styled.p`
  margin: 0;
`
const Email = styled.a`

`
const Phone = styled.p`
  margin: 0;
`

const Contact = props => (

  <ContactWrapper>
    <City>{props.city}</City>
    <Timezone>{props.timezone}</Timezone>
    <Email href={props.email_address}>{props.email_address}</Email>
    <Phone>{props.phone}</Phone>
  </ContactWrapper>

)

export default Contact