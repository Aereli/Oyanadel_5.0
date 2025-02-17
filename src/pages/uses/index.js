import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import styles from "./styles.module.scss"

function Uses({ data }) {
  const uses = data.allUsesJson.nodes[0].usesInfo

  return (
    <Layout>
      <SEO title="Uses" />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Hi There! This page shows my setup and software that I use.</h1>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} alt="computer desk" />

        {uses.map(item => (
          <div className={styles.content}>
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
