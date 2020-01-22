import React from "react"
import styled from 'styled-components'

const ContactWrapper = styled.div`

`
const City = styled.p`

`
const Timezone = styled.p`

`
const Email = styled.a`

`
const Phone = styled.p`

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