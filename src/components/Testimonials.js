import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { graphql, useStaticQuery } from 'gatsby'


const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
          name: {in:["testi1", "testi2"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    
    `)
    return (
       <TestimonialsContainer>
           <TopLine>
               Testimonials
               </TopLine>
               <Description>
                  What People are saying
               </Description>
               <ContentWrapper>
                   <ColumnOne>
                     <Testimonial>
                         
                         <h3>Sean Michales</h3>
                         <p>“We have worked with Kayak on two key Gabriele events
where Suki headlined and presented the best of Wellbeing
in the Workplace. Her energy, passion and knowledge are
key to the success of these events. She brings her own real
life experiences, But also provides vital statistics and
solutions that inspire and provoke.”</p>
                     </Testimonial>
                     <Testimonial>
                         
                         <h3>Sean Sarah</h3>
                         <p>“We have worked with Kayak on two key Gabriele events
where Suki headlined and presented the best of Wellbeing
in the Workplace. Her energy, passion and knowledge are
key to the success of these events. She brings her own real
life experiences, But also provides vital statistics and
solutions that inspire and provoke.”</p>
                     </Testimonial>
                     
                   </ColumnOne>
                   <ColumnTwo>
                   {data.allFile.edges.map((image,key) =>(
                          <Images key={key} fluid={image.node.childImageSharp.fluid}/>                                       
                           
                   ))}
                  

                   </ColumnTwo>
               </ContentWrapper>
       </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
width:100%;
background:#fcfcfc;
color:#000;
padding:5rem calc((100vw - 1300px) / 2);
height:100%;
`
const TopLine = styled.p`
color:blue;
font-size:1rem;
padding-left:2rem;
margin-bottom:0.75rem;

`
const Description = styled.p`
font-size:3rem;
font-weight:bold;
text-align:start;
padding-left:2rem;
margin-bottom:4rem;
`

const ContentWrapper = styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr;
 padding:0 2rem;

 @media screen and (max-width:768px){
     grid-template-columns: 1fr;
 }
`

const Testimonial = styled.div`
padding-top:1rem;
pading-right:2rem;

h3{
    margin-bottom:1rem;
    font-size:1.5rem;
    font-style:italic;
}
p{
    color:#3b3b3b;
}
`

const ColumnOne = styled.div`
display:grid;
grid-template-rows: 1fr 1fr;

`

const ColumnTwo = styled.div`
display:grid;
 grid-template-columns: 1fr 1fr;
 margin-top:2rem;
 grid-gap:10px;
 @media screen and (max-width:500px){
    grid-template-columns: 1fr;
}
`
const Images = styled(Img)`
border-radius:10px;
height:100%;
`