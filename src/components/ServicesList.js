import React from "react"
import styled from 'styled-components'

const ListWrapper = styled.ul`
`

const ServicesList = ({ list }) => (
  <ListWrapper>
    {list.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ListWrapper>
);

export default ServicesList