import React, { useState } from "react"
import Img from "gatsby-image"
import Modal from "@material-ui/core/Modal"

const SingleProject = ({
  image,
  title,
  url,
  description,
  sub,
  id,
  github,
  video,
}) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      <Img key={id} fixed={image}></Img>
      <p id="title">{title}</p>
      <p id="main-desc">{sub}</p>
      <p>{description}</p>
      <div id="links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          View Github
        </a>
        <a href={url} target="_blank" rel="noopener noreferrer">
          View The Site
        </a>
        <button className="button" onClick={handleOpen}>
          Preview
        </button>
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
            track=""
            style={{
              width: "80%",
              objectFit: "contain",
            }}
          >
            <source src={video} />
          </video>
        </Modal>
      </div>
    </div>
  )
}
export default SingleProject
