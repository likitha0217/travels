import React from 'react'
import Img from 'gatsby-image'
import Trips from "../components/Trips"
import styled from'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const TripsBack = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholder: file(relativePath: { eq: "trip.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1300, quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
    `)
    return (
     <TripsMainContainer>
         <TripsImage>
         <Image fluid={data.placeholder.childImageSharp.fluid} />  
         </TripsImage>
         <Trips heading="Our Favorite Designation" />
     </TripsMainContainer>
    )
}

export default TripsBack
const TripsMainContainer =styled.div``

const TripsImage = styled.div`
img {
    width: 100%;
    margin-top: -81px;
}
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