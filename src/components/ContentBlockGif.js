import React from "react"
import styled, { keyframes }  from 'styled-components'
import bgx2 from '../images/background_logo@2x.jpg'
import bgSmallx2 from '../images/background_logo_small@2x.jpg'
import bgSmall from '../images/background_logo_small.jpg'
import animation from '../images/logo_animation.gif'

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
    /* max-width: 765px; */
    max-width: 100%;
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
    animation: 0.5s ease-in 1.2s forwards ${fadeIn};
    opacity: 0;
  }

  @media screen and (min-width: 450px) {
    background-image: url(${animation});
    background-size: 450px 450px;
    height: 450px;
    width: 450px;
  }

  /* @media screen and (max-width: 450px), (min-resolution: 192dpi) { 
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
  } */
`

const ContentBlockGif = props => (

    <ContentWrapper>

      <StaticBackground />

      <Content>
        {props.children}
      </Content>

    </ContentWrapper>

)

export default ContentBlockGif