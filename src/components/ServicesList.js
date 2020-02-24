import React from "react"
import styled from 'styled-components'
import Heading from "./Heading";

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

const WhatWeDid = styled(Heading) `
  margin-top: 30px;
`

const ServicesList = ({ list }) => (

  <>
    <WhatWeDid
      text="What we did"
      tag="h2"
    />

    <ListWrapper>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ListWrapper>
  </>
);

export default ServicesList