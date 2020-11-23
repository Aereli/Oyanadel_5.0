import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import "./styles.scss"
import githubImg from "../../images/Vector.svg"
import fileImg from "../../images/Vector2.svg"
import linkedinImg from "../../images/Vector3.svg"
import Resume from "../../images/EricOyanadel_Pro_2020.pdf"
import { gsap } from 'gsap/all';

const Hero = () => {

  const sunRef = useRef()

  useEffect(() => {
    gsap.to(sunRef.current, {
      y: -200,
      duration: 15,
      delay: 3,
      scale: 1.3
    })
  }, [])

  return (
    <section className="heroContainer">
      <div className="heroTitlesContainer">
        <h1>Eric Oyanadel</h1>
        <div className="heroAnchors">
          <a href="https://github.com/Aereli" target="_blank" rel="noreferrer">
            <img src={githubImg} alt="github" />
          </a>
          <a href={Resume} download>
            <img src={fileImg} alt="file" />
          </a>
          <a
            href="https://www.linkedin.com/in/eric-oyanadel/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinImg} alt="linkedin" />
          </a>
        </div>
      </div>

      <div className="heroBannerContainer">
        <div className="heroBanner">
          <div className="heroSun" ref={sunRef}/>
          <div className="bannerText">
            <h2>FULL-STACK</h2>
            <h2>WEB DEVELOPER</h2>
          </div>
        </div>

      </div>
    </section>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  resume: PropTypes.string,
  linkedin: PropTypes.string,
}

Hero.defaultProps = {
  title: null,
  resume: null,
  linkedin: null,
}

export default Hero
