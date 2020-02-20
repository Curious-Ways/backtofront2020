import React from "react"
import styled, { keyframes }  from 'styled-components'
import bgx2 from '../images/background_logo@2x.jpg'
import bgSmallx2 from '../images/background_logo_small@2x.jpg'
import bg from '../images/background_logo.jpg'
import bgSmall from '../images/background_logo_small.jpg'

const fadeIn = keyframes`
  from { 
    opacity: 0; 
  }
  to { 
    opacity: 1; 
  }
`
const ContentWrapper = styled.div`
  min-height: 450px;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 765px;
  }
`
const Content = styled.div`
  padding: 45px 0;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 520px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }  
`
const StaticBackground = styled.div`
  background-repeat: no-repeat;
  background-position: 100% 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 880px) {
    right: 0;
    top: 0;
    transform: none;
    /* @keyframes duration | timing-function | delay | iteration-count | direction | fill-mode | play-state | name */
    animation: 0.5s ease-in 1.2s forwards ${fadeIn};
    opacity: 0;
  }

  @media screen and (min-width: 450px) {
    background-image: url(${bg});
    background-size: 450px 450px;
    height: 450px;
    width: 450px;
  }

  @media screen and (max-width: 450px), (min-resolution: 192dpi) { 
    background-image: url(${bgx2});
  }

  @media screen and (max-width: 449px) {
    background-image: url(${bgSmall});
    background-size: 350px 350px;
    height: 350px;
    width: 350px;
  }

  @media screen and (max-width: 449px), (min-resolution: 192dpi) { 
    background-image: url(${bgSmallx2});
  }
`

const ContentBlockStatic = props => (

    <ContentWrapper>

      <StaticBackground />

      <Content>
        {props.children}
      </Content>

    </ContentWrapper>

)

export default ContentBlockStatic