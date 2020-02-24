import React, { Fragment, useState } from "react"
import Video from "../components/Video"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"
import MediaQuery from 'react-responsive'
import styled from 'styled-components'

const VideoLink = styled.div `
  &:hover {
    cursor: pointer;
  }
`

const CloseButton = styled.div `
  position: absolute;
  top: 5px;
  right: 5px;

  button {
    background: none;
    border: none;
    font-size: 30px;
    color: ${({ theme }) => theme.colorPurple};

    &:hover {
      cursor: pointer;
    }    
  }
`

export default function VideoPop(props) {
  const [showLightbox, setShowLightbox] = useState(false)
    return (
      <>
        <MediaQuery minWidth={768}>
          <Fragment>

            <VideoLink role="button" tabIndex="0" onKeyPress={() => setShowLightbox(true)} onClick={() => setShowLightbox(true)}>
              {props.children}
            </VideoLink>
            
            {showLightbox && (
              <DialogOverlay style={{ background: "#371dc0" }}>
                <DialogContent style={{ background: "white", padding: "40px", width: "80%", maxWidth: "1000px", position: "relative" }}>

                <Video
                  videoSrcURL="https://player.vimeo.com/video/362328271?autoplay=1"
                  videoTitle="Zenden"
                />

                <CloseButton>
                  <button
                    type="button"
                    onClick={() => setShowLightbox(false)}
                    > 
                    <span role="img" aria-label="close button">&#10005;</span>
                  </button>
                </CloseButton>

                </DialogContent>
              </DialogOverlay>
              
            )}
          </Fragment>
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <Video
            videoSrcURL="https://player.vimeo.com/video/362328271"
            videoTitle="Zenden"
          />
        </MediaQuery>
      </>

    )
  }