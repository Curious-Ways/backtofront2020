import React, { useState } from 'react';
import { Link } from "gatsby"
import styled, { keyframes }  from 'styled-components'
import MediaQuery from 'react-responsive'
import Burger from './burger';
import Menu from './menu';

const fadeIn = keyframes`
  from { 
    opacity: 0; 
  }
  to { 
    opacity: 1; 
  }
`
const Header = styled.header`
  animation: ${fadeIn} 2s;
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
    border-bottom: 2px solid #1DD5E1;
  }
  a:hover, a:active, a:focus {
    color: #1DD5E1;
  }
`
const Logo = styled.h1`
  margin: 0;
  font-size: 26px;
  line-height: 1.2;
`
const NavItemsWrap = styled.ul`
  margin: 0;
  display: flex;
  
  li {
    line-height: 1.4;
    font-size: 18px;
    list-style: none;
    padding: 0 10px;
  }
`

function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (

    <Header>

      <MediaQuery maxDeviceWidth={767}>
        <Logo>
          <Link to="/">
            B2F
          </Link>
        </Logo>
        <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>  
      </MediaQuery>

      <MediaQuery minDeviceWidth={768}>
        <Logo>
          <Link to="/">
            Back to Front
          </Link>
        </Logo>
        <nav>
          <NavItemsWrap>
            <li><Link activeStyle={{ color: "#1DD5E1" }} to="/about/">About</Link></li>
            <li><Link activeStyle={{ color: "#1DD5E1" }} to="/relationships/">Relationships</Link></li>
            <li><a href="tel:+4407870583147">Call us</a></li>
            <li><a href="mailto:hello@backtofront.co">Email us</a></li>
          </NavItemsWrap>
        </nav>
      </MediaQuery>
      
    </Header>

  );
}


export default SiteHeader
