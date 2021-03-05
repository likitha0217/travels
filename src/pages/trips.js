import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

import TripsBack from "../components/TripsBack"

const trips = () => {
    return (
        <Layout>
    <SEO title="Home" />
    
     <TripsBack />
  </Layout>
    )
}

export default trips


