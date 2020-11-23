import React from "react"
import Single from "./SingleProject"
import { useStaticQuery, graphql } from "gatsby"

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
                fluid {
                  ...GatsbyImageSharpFluid
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
    <>
      <h1 className="galleryTitle">Projects</h1>
      <h2 className="galleryDesc">Below are a few of my projects, please keep in mind that some are local copies of the original site and may have longer wait time when loading.</h2>
      <div className="galleryContainer">
        {projects.map(({ node }) => (
          <Single
            key={node.id}
            title={node.title}
            sub={node.sub}
            description={node.description}
            image={node.image.childImageSharp.fluid}
            github={node.github}
            url={node.url}
            video={node.video}
            slug={node.slug}
          />
        ))}
      </div>
    </>
  )
}

export default Gallery
