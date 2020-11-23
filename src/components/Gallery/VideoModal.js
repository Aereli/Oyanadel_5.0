import React, { useState } from 'react'
import Modal from "@material-ui/core/Modal"


const VideoModal = ({ video }) => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  return (
    <div>
      {video &&
        <button className="button" onClick={handleOpen}>
        Quick Preview! 
      </button>
      }
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          outline: 0,
        }}
      >
        <video
          autoPlay
          style={{
            width: "80%",
            objectFit: "contain",
          }}
        >
          <source src={video} />
          <track kind="captions" srclang="en" label="english_captions" />
        </video>
      </Modal>
    </div>
  )
}

export default VideoModal