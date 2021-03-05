import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Carousel } from 'react-bootstrap';
import "../components/styles/style.css"

const ImageSlider = () => {
    const data = useStaticQuery(graphql`
    query {
        placeholder: file(relativePath: { eq: "slider1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1300, quality:100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        placeholder1: file(relativePath: { eq: "slider2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1300, quality:100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          placeholder2: file(relativePath: { eq: "slider3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1300, quality:100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
  
      }
    `)
    return (
   

<Carousel>
  <Carousel.Item>
  <Image fluid={data.placeholder.childImageSharp.fluid} />  
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image fluid={data.placeholder1.childImageSharp.fluid} />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image fluid={data.placeholder2.childImageSharp.fluid} />


    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
               
      
    )
}

export default ImageSlider
const Image =styled(Img)`
display:flex;
color: #fff;
justify-content:center;
align-items:center;
height:100vh;
padding:0 1rem;
position:relative;
margin-top:-80px;`
