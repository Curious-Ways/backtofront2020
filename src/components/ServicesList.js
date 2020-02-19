import React from "react"
import styled from 'styled-components'

const ListWrapper = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 40% auto;
  grid-gap: 2px 10px;
  align-items: start;

  li {
    align-self: start;
  }
`

const ServicesList = ({ list }) => (
  <ListWrapper>
    {list.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ListWrapper>
);

export default ServicesList