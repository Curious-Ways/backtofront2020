import React from "react"
import styled from 'styled-components'
import Contact from "./Contact"

const FooterWrapper = styled.footer`
  @media screen and (min-width: 850px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;  
  }
  padding: 60px 0;

  a:link, a:visited {
    color: #fff;
    border-bottom: 2px solid transparent;
    padding-bottom: 1px;
  }
  a:hover, a:active, a:focus {
    border-bottom: 2px solid #fff;
  }  
`
const Legal = styled.small`
  display: block;
  font-size: 14px;
  max-width: 250px;

  @media screen and (min-width: 850px) {
    text-align: right;
  }
`
const ContactsGroup = styled.div` 

  div {
    margin: 0 0 30px;
  }

  @media screen and (min-width: 850px) {
    display: flex;

    div {
      margin: 0 35px 0 0; 
    }
  }
`

const SiteFooter = props => ( 

  <FooterWrapper>
  
    <ContactsGroup>
      <Contact 
        city="London"
        email_address="david@backtofront.co"
        phone="+44 7870 583 147"
      />

      <Contact 
        city="New York"
        email_address="pete@backtofront.co"
        phone="+1 347 863 3183"
      />
    </ContactsGroup>

    <Legal>
      © {new Date().getFullYear()} Back to Front London Limited Company Number 10026593. Registered in England and Wales
    </Legal>

  </FooterWrapper>

)

export default SiteFooter