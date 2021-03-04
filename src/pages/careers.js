import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

import Careers from "../components/Careers"
import styled from'styled-components'
import Img from "../assets/images/careers.jpg"


const careers = () => {
    return (
        <Layout>
    <SEO title="Home" />
    <CareerMainContainer>
        <CareerImage>
        <img src={Img} alt="" />
        </CareerImage>
           
      <Careers />
    </CareerMainContainer>



    
  </Layout>
    )
}

export default careers


const CareerMainContainer =styled.div``

const CareerImage = styled.div`
img {
    width: 100%;
    margin-top: -81px;
}
`