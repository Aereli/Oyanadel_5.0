import React from "react"
// import PropTypes from "prop-types"
import "./styles.scss"
import Bars from "../Bars"
import github from "../../images/Vector.svg"
import file from "../../images/Vector2.svg"
import linkedin from "../../images/Vector3.svg"
import bicycle from "../../images/bicycle.svg"

const Hero = () => {
  return (
    <div>
      <div className="heroTitlesContainer">
        <h1>Eric Oyanadel</h1>
        <h2>based in Miami, Florida</h2>
        <div className="heroAnchors">
          <a href="#">
            <img src={github} alt="github" />
          </a>
          <a href="#">
            <img src={file} alt="file" />
          </a>
          <a href="#">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
      <div className="heroBannerContainer">
        <div className="heroBanner">
          <img className="heroCycle" src={bicycle} alt="bicycle"></img>
          <div>
            <h1>FULL-STACK</h1>
            <h1>WEB DEVELOPER</h1>
          </div>
        </div>
        <Bars />
      </div>
    </div>
  )
}

Hero.propTypes = {}

Hero.defaultProps = {}

export default Hero
