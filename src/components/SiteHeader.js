import React, { useState } from 'react';
import { Link } from "gatsby"
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px 0 30px;  

  @media screen and (min-width: 768px){
    padding: 100px 0 70px;  
  }
  
  a:link, a:visited {
    color: #fff;
    padding-bottom: 1px;
    border-bottom: 2px solid ${({ theme }) => theme.colorLightBlue};
  }
  a:hover, a:active, a:focus {
    color: ${({ theme }) => theme.colorLightBlue};
  }
`
const Logo = styled.h1`
  margin: 0;
  font-size: 26px;
  line-height: 1.2;
`

function SiteHeader() {

  return (

    <Header>

      <Logo>
        <Link to="/">
          Back to Front
        </Link>
      </Logo>
      
    </Header>

  );
}


export default SiteHeader
