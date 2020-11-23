import React, { useRef, useEffect } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import "./styles.scss"
import VanillaTilt from 'vanilla-tilt'
import VideoModal from "./VideoModal"

const SingleProject = ({ 
  image,
  title,
  sub,
  id,
  github,
  video,
  slug
}) => {

  const titleRef = useRef(null)

// https://www.npmjs.com/package/vanilla-tilt
  useEffect(() => {
    VanillaTilt.init(titleRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })
    return () => titleRef.current.vanillaTilt.destroy()
  }, [])

  return (
    <div ref={titleRef} className="singleContainer">

      <div className="singleImage">
        <Img  key={id} fluid={image} alt={title}/>
      </div>

      <div className="singleContent">
        <h1 id="title">{title}</h1>
        <p id="main-desc">{sub}</p>
        <div className="singleLinks">
         { github &&
           <Link to={github} target="_blank" rel="noopener noreferrer">
            View Github
          </Link>
         } 
        {video && <VideoModal video={video} /> }
        <Link to={`/projects/${slug}`}>View More</Link> 
        </div>
      </div>

    </div>
  )
}
export default SingleProject
