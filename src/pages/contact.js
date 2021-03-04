import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import Img from "../assets/images/contact.jpg"
import Contact from "../components/Contact"
import styled from'styled-components'
const contact = () => {
    return (
        <Layout>
    <SEO title="Home" />
    <ContactMainContainer>
       <ContactImage>
         <img src={Img} alt=""/>
       </ContactImage>
       <Contact/>

    </ContactMainContainer>

     
   
   
    
  </Layout>
    )
}

export default contact
const ContactMainContainer =styled.div`
width:100%;
background:#fcfcfc;
color:#000;
padding:5rem calc((100vw - 1300px) / 2);
height:100%;
`

const ContactImage = styled.div`
img {
    width: 100%;
    margin-top: -81px;
}
`