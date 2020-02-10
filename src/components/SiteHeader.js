import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 100px 0 70px;
`
const Logo = styled.h1`
  margin: 0;
`
const NavItemsWrap = styled.ul`
  margin: 0;
  display: flex;
  
  li {
    list-style: none;
    padding: 0 10px;
  }
`

const SiteHeader = ({ siteTitle }) => (
  <Header>

    <Logo>
      <Link to="/">
        {siteTitle}
      </Link>
    </Logo>

    <nav>
      <NavItemsWrap>
        <li><Link activeStyle={{ color: "red" }} to="/about/">About</Link></li>
        <li><Link activeStyle={{ color: "red" }} to="/relationships/">Relationships</Link></li>
        <li><a href="tel:+4407870583147">Call us</a></li>
        <li><a href="mailto:hello@backtofront.co">Email us</a></li>
      </NavItemsWrap>
    </nav>

  </Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default SiteHeader