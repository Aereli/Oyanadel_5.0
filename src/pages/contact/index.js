import React from "react"
// import PropTypes from "prop-types"
import "./styles.scss"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import github from "../../images/Vector.svg"
import file from "../../images/Vector2.svg"
import linkedin from "../../images/Vector3.svg"
import stackoverflow from "../../images/Vector4.svg"
import Resume from "../../images/EricOyanadel_Pro_2020.pdf"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Eric | Contact" />
      <div className="contactContainer">
        <h1>Eric Oyanadel</h1>
        <h2>AereliOyanadel@gmail.com</h2>

        <div className="contactAnchors">
          <a href="https://github.com/Aereli" target="_blank" rel="noreferrer">
            <img src={github} alt="github" />
          </a>
          <a href={Resume} download>
            <img src={file} alt="file" />
          </a>
          <a
            href="https://www.linkedin.com/in/eric-oyanadel/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://stackoverflow.com/users/12149334/aereli"
            target="_blank"
            rel="noreferrer"
          >
            <img src={stackoverflow} alt="stackoverflow" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

Contact.propTypes = {}

Contact.defaultProps = {}

export default Contact
