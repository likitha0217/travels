import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import Img from "../assets/images/about.jpg"
import About from "../components/About"
import styled from'styled-components'



const about = () => {
    return (
        <Layout>
    <SEO title="Home" />
    <AboutMainContainer>
       <AboutImage>
         <img src={Img} alt=""/>
       </AboutImage>
       <About />

    </AboutMainContainer>

     
   
   
    
  </Layout>
    )
}

export default about

const AboutMainContainer =styled.div``

const AboutImage = styled.div`
img {
    width: 100%;
    margin-top: -81px;
}
`




