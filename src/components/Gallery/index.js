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

  return (
    <>
      {projects.map(({ node }) => (
        <Single
          key={node.id}
          title={node.title}
          sub={node.sub}
          description={node.description}
          image={node.image.childImageSharp.fixed}
          github={node.github}
          url={node.url}
          video={node.video}
        />
      ))}
    </>
  )
}

export default Gallery
