import React from "react"
import styled from 'styled-components'
import animation from '../images/logo_animation.gif'
import video from '../images/logo_animation.mp4'

const ContentWrapper = styled.div`
  border: 1px solid orange;
  /* background-image: url(${animation});
  background-repeat: no-repeat;
  background-position: 100% 50%; */
  max-width: 765px;
  min-height: 450px;
  display: flex;
  align-items: center;
  position: relative;
`
const Content = styled.div`
  max-width: 520px;
  padding: 45px 0;
  position: relative;
`
const VideoLoop = styled.div`
  position: absolute;
  right: 0;
  top: 0%;
`

const ContentBlockAnimated = props => (

    <ContentWrapper>

      <VideoLoop>
        <video autoplay="autoplay" loop controls muted width="450px">
          <source type="video/mp4" src={video} />
        </video>
      </VideoLoop>

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