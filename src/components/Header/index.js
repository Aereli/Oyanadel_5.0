import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./styles.scss"

const Header = ({ siteTitle }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <header>
      <nav className="navbar">
        <div className="brand-title">{siteTitle}</div>
        <Link
          to="/"
          className="toggle-button"
          onClick={() => setToggle(!toggle)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </Link>
        <div className={["navbarLinks", toggle && "active"].join(" ")}>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
