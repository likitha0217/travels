import React from "react"
import Hero from "../components/Hero"
import Trips from "../components/Trips"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Email from "../components/Email"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favorite Designation"/>
    <Testimonials/>
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
