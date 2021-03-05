import React from 'react'
import Img from 'gatsby-image'
import Careers from "../components/Careers"
import styled from'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
const CareerBack = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholder: file(relativePath: { eq: "careers.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1300, quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
    `)
    return (
        <CareerMainContainer>
        <CareerImage>
        <Image fluid={data.placeholder.childImageSharp.fluid} />  
        </CareerImage>
           
      <Careers />
    </CareerMainContainer>
    )
}

export default CareerBack
const CareerMainContainer =styled.div``

const CareerImage = styled.div`

`
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