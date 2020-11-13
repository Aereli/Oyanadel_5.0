import React from "react"
// import PropTypes from "prop-types"
import "./styles.scss"
import Bars from "../Bars"
import github from "../../images/Vector.svg"
import file from "../../images/Vector2.svg"
import linkedin from "../../images/Vector3.svg"

const Hero = () => {
  return (
    <>
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
        <div className="heroSunContainer">
          <div className="heroSun">
            <Bars degree="180deg" />
          </div>
        </div>
        <div className="heroBanner">
          <div>
            <h1>FULL-STACK</h1>
            <h1>WEB DEVELOPER</h1>
          </div>
        </div>
        <Bars color="linear-gradient(180deg, rgba(44,87,113,1) 10%, rgba(69,123,157,1) 79%, rgba(0,212,255,0) 100%)" />
      </div>
    </>
  )
}

Hero.propTypes = {}

Hero.defaultProps = {}

export default Hero
