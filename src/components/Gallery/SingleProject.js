import React, { useRef, useEffect } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./styles.scss"
import VanillaTilt from 'vanilla-tilt'
import VideoModal from "./VideoModal"


const SingleProject = ({ 
  image,
  title,
  url,
  sub,
  id,
  github,
  video,
}) => {

  const tiltRef = useRef(null)

// https://www.npmjs.com/package/vanilla-tilt
  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })
    return () => tiltRef.current.vanillaTilt.destroy()
  }, [])

  return (
    <div ref={tiltRef} className="singleContainer">

      <div className="singleImage">
        <Img  key={id} fluid={image} alt={title}/>
      </div>

      <div className="singleContent">
        <h1 id="title">{title}</h1>
        <p id="main-desc">{sub}</p>
        <div className="singleLinks">
          <Link to={github} target="_blank" rel="noopener noreferrer">
            View Github
          </Link>
          <VideoModal video={video} />
          <a>View more</a>
        </div>
      </div>

    </div>
  )
}
export default SingleProject
