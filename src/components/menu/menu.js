import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styled';
import { Link } from 'gatsby';
const Menu = ({ open }) => {
  return (

    <StyledMenu open={open}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/projects/">Projects</Link></li>
          <li><a href="tel:+4407870583147">Call us</a></li>
          <li><a href="mailto:hello@backtofront.co">Email us</a></li>
        </ul>
      </nav> 
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;