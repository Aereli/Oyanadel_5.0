import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import Img from "gatsby-image"
import Modal from "@material-ui/core/Modal"

const Gallery = () => {
  const pageQuery = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            sub
            slug
            url
            description
            github
            video
            image {
              childImageSharp {
                # fluid {
                #   ...GatsbyImageSharpFluid
                # }
                fixed(width: 300, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = pageQuery.allProjectsJson.edges
  console.log(projects)

  return (
    <div>
      <h1>this is the gallery</h1>
      {projects.map(({ node }) => (
        <>
          <h2>{node.title}</h2>
          <Img fixed={node.image.childImageSharp.fixed} />
          <p>{node.description}</p>
          <p>{node.sub}</p>
          <p>{node}</p>
          <a href={node.url}>Url</a>
          <a href={node.github}>Github</a>
          <a href={node.video}>video</a>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropProps={{
              timeout: 500,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: 0,
            }}
          >
            <video
              autoPlay
              track="barhop video"
              style={{
                width: "80%",
                objectFit: "contain",
              }}
            >
              <source src={video} />
            </video>
          </Modal>
        </>
      ))}
    </div>
  )
}

Gallery.propTypes = {}

Gallery.defaultProps = {}

export default Gallery
