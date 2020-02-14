import React from 'react';
import styled from 'styled-components'

const Header = styled.h1`
  font-family: AribauGrotesk-Bd, sans-serif;
  font-size: 22px;
  margin-top: 0;
`

const Heading = props => (
  
  <Header as={props.tag} className={props.className}>
    {props.text}
  </Header>
)

export default Heading