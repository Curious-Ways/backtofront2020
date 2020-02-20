import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"

const CardWrapper = styled.div`
  position: relative;

  a:link, a:visited {
    color: #fff;

    @media screen and (min-width: 900px) {
      color: ${({ theme }) => theme.colorPurple};
    }
  }
`
const CardTextWrap = styled.div`
  @media screen and (max-width: 899px) {
    padding: 30px 0;
  }

  @media screen and (min-width: 900px) {
    position: absolute;
    bottom: 15px;
    left: 20px;
    max-width: 560px;
  }
`
const CardText = styled.p`
  margin-bottom: 0;

  @media screen and (max-width: 899px) {
    font-size: 18px;
    line-height: 1.5;
  }

  @media screen and (min-width: 900px) {
    background: #fff;
    background: rgba(255, 255, 255, 0.9);
    display: inline;
    padding: 12px 8px;
    box-decoration-break: clone;
    line-height: 2.2;
  }
`
const ImageWrap = styled.div`
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.005);
  }

  @media screen and (max-width: 899px) {
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }
`
const ViewProject = styled(CardText) `
  @media screen and (min-width: 900px) {
    padding: 0px 8px;
    margin-top: 2px;
    display: inline-block;
  }
`

const CardWide = props => (

  <CardWrapper>
    <Link to={props.link}>
      <ImageWrap>
        {props.children}
      </ImageWrap>
      <CardTextWrap>
        <CardText>{props.text}</CardText><br />
        <ViewProject>View Project &rarr;</ViewProject>
      </CardTextWrap>
    </Link>
  </CardWrapper>

)

export default CardWide