import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage