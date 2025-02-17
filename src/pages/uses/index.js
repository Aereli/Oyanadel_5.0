import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./styles.module.scss"

function Uses({ data }) {
  const uses = data.allUsesJson.nodes[0].usesInfo
  const image = getImage(data.file.childImageSharp)

  return (
    <Layout>
      <SEO title="Uses" />
      <div className={"container"}>
        <div className={"header"}>
          <h1>Hi There! This page shows my setup and software that I use.</h1>
        </div>
        <GatsbyImage image={image} alt="computer desk" />

        {uses.map(item => (
          <div className={"content"}>
            <h2 key={item.id}>{item.title}</h2>
            {item.content.map(content => (
              <p>
                <a href={content.url} target="_blank" rel="noopener noreferrer">
                  {content.title}{" "}
                </a>
                {content.description}
              </p>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Uses

export const data = graphql`
  query {
    file(relativePath: { eq: "computer_desk.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allUsesJson {
      nodes {
        usesInfo {
          id
          title
          content {
            id
            title
            url
            description
          }
        }
      }
    }
  }
`
