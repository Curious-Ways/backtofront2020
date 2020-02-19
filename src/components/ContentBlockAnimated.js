import React from "react"
import styled, { keyframes }  from 'styled-components'
import animation from '../images/logo_animation.gif'
import video from '../images/logo_animation.mp4'

const fadeIn = keyframes`
  from { 
    opacity: 0; 
  }
  to { 
    opacity: 1; 
  }
`
const ContentWrapper = styled.div`
  /* background-image: url(${animation});
  background-repeat: no-repeat;
  background-position: 100% 50%; */
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
const VideoLoop = styled.div`
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

  video {
    @media screen and (max-width: 449px) {
      width: 350px
    }

    @media screen and (min-width: 449px) {
      width: 450px
    }
  }
`

const ContentBlockAnimated = props => (

    <ContentWrapper>

      <VideoLoop>
        <video aautoPlay={true} muted>
          <source type="video/mp4" src={video} />
        </video>
      </VideoLoop>

      <Content>
        {props.children}
      </Content>

    </ContentWrapper>

)

export default ContentBlockAnimated