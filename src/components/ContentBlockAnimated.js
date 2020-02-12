import React from "react"
import styled from 'styled-components'
import animation from '../images/logo_animation.gif'
import video from '../images/logo_animation.mp4'
import MediaQuery from 'react-responsive'

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
  }
`

const ContentBlockAnimated = props => (

    <ContentWrapper>

      <MediaQuery maxDeviceWidth={449}>
        <VideoLoop>
          <video autoplay="autoplay" muted width="350px">
            <source type="video/mp4" src={video} />
          </video>
        </VideoLoop>
      </MediaQuery>

      <MediaQuery minDeviceWidth={450}>
        <VideoLoop>
          <video autoplay="autoplay" muted width="450px">
            <source type="video/mp4" src={video} />
          </video>
        </VideoLoop>
      </MediaQuery>

      <Content>
        {props.description.map((el, i) => {
          return (
            <p key={`contentBlockText__${i}`}>{el.text}</p>
          )
        })}
      </Content>

    </ContentWrapper>

)

export default ContentBlockAnimated