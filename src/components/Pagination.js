import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const PaginationWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 0;
  padding: 0;
  list-style: none;
`
const PaginationItem = styled.li`

`

const Pagination = props => (

  <PaginationWrap>
    <PaginationItem>
      <Link to={props.linkBefore}>Before</Link>
    </PaginationItem>
    <PaginationItem>
      <Link to={props.linkMore}>More</Link>
    </PaginationItem>
  </PaginationWrap>

)

export default Pagination


