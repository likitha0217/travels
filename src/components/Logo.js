import React from 'react'
import Img from 'gatsby-image'

import styled from'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
        placeholder: file(relativePath: { eq: "logo1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 150, quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
    `)
  return (
    <LogoConatiner>
      <LogoImage>
      <Image fluid={data.placeholder.childImageSharp.fluid} />  
      </LogoImage>
    </LogoConatiner>
    
  )
}

export default Logo
const LogoConatiner =styled.div``

const LogoImage = styled.div``
const Image =styled(Img)`
display:flex;
color: #fff;
justify-content:center;
align-items:center;
height:10vh;
width: 5vw;
padding:0 1rem;
position:relative;
margin-top:10px;

@media screen and (max-width:768px){
  width: 21vw !important;
  
  margin-left: 161px;

}
`