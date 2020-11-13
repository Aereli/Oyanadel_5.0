import React from "react"
import PropTypes from "prop-types"
import "./styles.scss"

const Bars = ({ color, degree }) => (
  <div className="heroBars" style={{ transform: `rotate(${degree})` }}>
    <div className="heroBars1" style={{ background: `${color}` }} />
    <div className="heroBars2" style={{ background: `${color}` }} />
    <div className="heroBars3" style={{ background: `${color}` }} />
    <div className="heroBars4" style={{ background: `${color}` }} />
    <div className="heroBars5" style={{ background: `${color}` }} />
    <div className="heroBars6" style={{ background: `${color}` }} />
  </div>
)

Bars.propTypes = {
  color: PropTypes.string,
  degree: PropTypes.string,
}

Bars.defaultProps = {
  color: null,
  degree: null,
}

export default Bars
