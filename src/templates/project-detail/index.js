import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
  
export const query = graphql`
  query ProjectDetailQuery($slug: String!) {
    projectsJson(slug: {eq: $slug}) {
      description
      github
      id
      sub
      tech
      title
      url
      video
      image {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
    }
  }
  `

 const ProjectDetail = ({ data }) => {
  const project = data.projectsJson
  return (
    <Layout>
      <SEO title="Project" />

      <h1>{project.title}</h1>
    </Layout>
  )
}

export default ProjectDetail

