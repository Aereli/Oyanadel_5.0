import React from "react"
import PropTypes from "prop-types"
import "./styles.scss"
import githubImg from "../../images/Vector.svg"
import fileImg from "../../images/Vector2.svg"
import linkedinImg from "../../images/Vector3.svg"
import Resume from "../../images/EricOyanadel_Pro_2020.pdf"


const Hero = ({ github, linkedin}) => {

  return (
    <>
      <div className="heroTitlesContainer">
        <h1>Eric Oyanadel</h1>
        <h2>based in Miami, Florida</h2> 
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
        <div className="heroSunContainer">
          <div className="heroSun" />
        </div>

        <div className="heroBanner">
          <div>
            <h1>FULL-STACK</h1>
            <h1>WEB DEVELOPER</h1>
          </div>
        </div>
      </div>
    </>
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
