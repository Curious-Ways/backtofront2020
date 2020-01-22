import React from "react"
import styled from 'styled-components'

const ListWrapper = styled.ul`
`

const ServicesList = children => (

  <ListWrapper>
    { children }
  </ListWrapper>

)

export default ServicesList