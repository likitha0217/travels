import React from 'react'
import Img from 'gatsby-image'
import About from "../components/About"
import styled from'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const AboutBack = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholder: file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1300, quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
    `)
    return (
        <AboutMainContainer>
       <AboutImage>
       <Image fluid={data.placeholder.childImageSharp.fluid} />  
       </AboutImage>
       <About />

    </AboutMainContainer>

    )
}

export default AboutBack
const AboutMainContainer =styled.div``

const AboutImage = styled.div``
const Image =styled(Img)`
display:flex;
color: #fff;
justify-content:center;
align-items:center;
height:100vh;
padding:0 1rem;
position:relative;
margin-top:-80px;

@media screen and (max-width:768px){
  height:60vh ;

}`
