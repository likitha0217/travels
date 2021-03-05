import React from "react"

import Trips from "../components/Trips"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Email from "../components/Email"
import ImageSlider from "../components/ImageSlider"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ImageSlider />
   
    <Trips heading="Our Favorite Designation"/>
    <Testimonials/>
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
