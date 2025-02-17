import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../../images/logo.svg"
import "./styles.scss"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div
          className="toggle-button"
          onClick={() => setToggle(!toggle)}
          onKeyDown={() => setToggle(!toggle)}
          role="button"
          tabIndex={0}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={["navbarLinks", toggle && "active"].join(" ")}>
          <ul>
            {/* <li>
              <Link to="/projects">Works</Link>
            </li>
            <li>
              <Link to="/uses">Uses</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
