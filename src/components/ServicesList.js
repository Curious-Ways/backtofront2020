import React from "react"
import styled from 'styled-components'

const ListWrapper = styled.ul`
  list-style: none;
  margin-bottom: 0;
  padding: 0;

  @media screen and (min-width: 400px) {
    columns: 80px 2;
    column-gap: 0;   
  }

  @media screen and (min-width: 768px) {
    column-gap: 30px;    
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