import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import ImageGallery from "../components/FeaturedImages"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      {/* <ImageGallery /> */}
    </Layout>
  )
}

export default IndexPage
