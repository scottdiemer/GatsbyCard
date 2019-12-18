import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cards from "../components/cards"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Cards />
  </Layout>
)

export default IndexPage
