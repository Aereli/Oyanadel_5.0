import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout/index"
import SEO from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import VideoModal from "../../components/Gallery/VideoModal"
import "./styles.module.scss"

export const query = graphql`
  query ProjectDetailQuery($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
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
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectDetail = ({ data }) => {
  const project = data.projectsJson
  const image = getImage(data.file.childImageSharp)

  return (
    <Layout>
      <SEO title="Project" />
      <div className="projectDetailContainer">
        <hr />
        <div className="detailImage">
          <GatsbyImage image={image} alt={project.title} />
        </div>
        <hr />

        <h1>{project.title}</h1>

        <ul>
          {project.url && (
            <li>
              <a href={project.url} target="_blank" rel="noreferrer">
                View The Site
              </a>
            </li>
          )}
          {project.github && (
            <li>
              <a href={project.github} target="_blank" rel="noreferrer">
                View Github
              </a>
            </li>
          )}
          {project.video && <VideoModal video={project.video} />}
        </ul>

        <p>Tech Used: {project.tech}</p>
        <p>{project.description}</p>
      </div>
    </Layout>
  )
}

export default ProjectDetail
