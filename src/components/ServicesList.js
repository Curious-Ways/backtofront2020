import React from "react"
import styled from 'styled-components'

const ListWrapper = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 25% auto;
  grid-gap: 2px 10px;
`

const ServicesList = ({ list }) => (
  <ListWrapper>
    {list.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ListWrapper>
);

export default ServicesList