import React from "react"
// import PropTypes from "prop-types"
import "./styles.scss"
import vector from "../../images/Vector.svg"
import vector2 from "../../images/Vector2.svg"
import vector3 from "../../images/Vector3.svg"
import bicycle from "../../images/bicycle.svg"

const Hero = () => {
  return (
    <div>
      <div className="heroTitles">
        <h1>Eric Oyanadel</h1>
        <h2>based in Miami Florida</h2>
        <a href="#">
          <img src={vector} />
        </a>
        <a href="#">
          <img src={vector2} />
        </a>
        <a href="#">
          <img src={vector3} />
        </a>
      </div>
      <div className="heroBanner">
        <img src={bicycle}></img>
        <div>
          <h1>FULL-STACK</h1>
          <h1>WEB DEVELOPER</h1>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {}

Hero.defaultProps = {}

export default Hero
