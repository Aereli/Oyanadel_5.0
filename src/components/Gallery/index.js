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
        />
      ))}
    </div>
  )
}

export default Gallery
