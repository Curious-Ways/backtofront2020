import React from "react"
import styled from 'styled-components'
import Contact from "./Contact"

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;  
  padding: 60px 0;
`
const Legal = styled.small`
  max-width: 250px;
  text-align: right;
`
const ContactsGroup = styled.div` 
  display: flex;

  div {
    margin-right: 35px;
  }
`

const SiteFooter = props => ( 

  <FooterWrapper>
  
    <ContactsGroup>
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
    </ContactsGroup>

    <Legal>
      © {new Date().getFullYear()} Back to Front London Limited Company Number 10026593<br />Registered in England and Wales      
    </Legal>

  </FooterWrapper>

)

export default SiteFooter