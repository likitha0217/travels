import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Logo = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholder: file(relativePath: { eq: "logo1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 200, quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
  
      }
    `)
    return (
        <div>
           <Image fluid={data.placeholder.childImageSharp.fluid} />                                      
                       
        </div>
    )
}

export default Logo

const Image =styled(Img)`
img {
    position: inherit !important;
    margin-top: -20px;
  
}
div{
    padding:0px !important;
}

@media(max-width: 720px) {
img {
    margin-left: 45px;
    width: 20vw !important;
    margin-top: 27px !important;
}
}
`
