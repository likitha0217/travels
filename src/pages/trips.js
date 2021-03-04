import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import styled from'styled-components'
import Trips from "../components/Trips"
import Img from "../assets/images/trip.jpg"

const trips = () => {
    return (
        <Layout>
    <SEO title="Home" />
    <TripsMainContainer>
        <TripsImage>
            <img src={Img} alt="" />
        </TripsImage>
    </TripsMainContainer>
   
<Trips heading="Our Favorite Designation"/>
    
  </Layout>
    )
}

export default trips

const TripsMainContainer =styled.div``

const TripsImage = styled.div`
img {
    width: 100%;
    margin-top: -81px;
}
`
