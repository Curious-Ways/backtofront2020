import React from 'react'
import styled from 'styled-components'

const VideoWrap = styled.div `
  clear: both;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = ({ videoSrcURL, videoTitle }) => (
  <VideoWrap>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      allowfullscreen="allowfullscreen" 
      mozallowfullscreen="mozallowfullscreen" 
      msallowfullscreen="msallowfullscreen" 
      oallowfullscreen="oallowfullscreen" 
      webkitallowfullscreen="webkitallowfullscreen"
    />
  </VideoWrap>
)

export default Video