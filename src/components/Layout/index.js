/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../../assets/globals.scss"
import "./styles.scss"

import Header from "../Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer className="layoutFooter">
          <p className="footerText">
            © {new Date().getFullYear()}, Built from scratch using 
            <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer"> GatsbyJs</a>
          </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
