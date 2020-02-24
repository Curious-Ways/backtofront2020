import React from "react"
import styled from 'styled-components'
import Heading from "./Heading"

const ContactWrapper = styled.div`
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`
const City = styled(Heading)`
  margin-bottom: 10px
`
const Timezone = styled.p`
  margin: 0;
`
const Email = styled.a`
  display: inline-block;
`
const Phone = styled.a`
  margin: 0;
  display: inline-block;
`

const Contact = props => (

  <ContactWrapper>
    <City
      text={props.city}
      tag="h3"
    />
    <Timezone>{props.timezone}</Timezone>
    <Email href={props.email_address}>{props.email_address}</Email><br />
    <Phone href={props.phone}>{props.phone}</Phone>
  </ContactWrapper>

)

export default Contact