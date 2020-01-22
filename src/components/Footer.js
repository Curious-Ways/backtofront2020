import React from "react"
import styled from 'styled-components'
import Contact from "./Contact"

const FooterWrapper = styled.footer`

`

const Footer = props => (

  <FooterWrapper>
    <Contact 
      city="London"
      timezone=""
      email_address="david@backtofront.co"
      phone="+44 7870 583 147"
    />

    <Contact 
      city="New York"
      timezone=''
      email_address="pete@backtofront.co"
      phone="+1 347 863 3183"
    />

    <small>
      © 2019 Back to Front London Limited Company Number 10026593<br />Registered in England and Wales      
    </small>
  </FooterWrapper>

)

export default Footer