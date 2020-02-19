import React, { Fragment, useState } from "react"
import Video from "../components/Video"
import { DialogOverlay, DialogContent } from "@reach/dialog"
import "@reach/dialog/styles.css"
import MediaQuery from 'react-responsive'

export default function VideoPop(props) {
  const [showLightbox, setShowLightbox] = useState(false)
    return (
      <>
        <MediaQuery minWidth={768}>
          <Fragment>

            <div role="button" tabIndex="0" className="btn-img" onKeyPress={() => setShowLightbox(true)} onClick={() => setShowLightbox(true)}>
              {props.children}
            </div>
            
            {showLightbox && (
              <DialogOverlay style={{ background: "#371dc0" }}>
                <DialogContent style={{ background: "white", padding: "20", width: "80%", maxWidth: "1000px" }}>

                <Video
                  videoSrcURL="https://player.vimeo.com/video/362328271?autoplay=1"
                  videoTitle="Zenden"
                />

                <div>
                  <button
                    type="button"
                    onClick={() => setShowLightbox(false)}
                    > 
                    Close
                  </button>
                </div>

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