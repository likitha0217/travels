import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const About = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
                 name: {in:["email2"]}}) {
                 edges {
                   node {
                     childImageSharp {
                       fluid{
                        ...GatsbyImageSharpFluid
                       }
                    }
                }
            }
          }
       }
    `)
    return (
       <AboutConatiner>
           <TopLine>About Us</TopLine>
           <ContentWrapper>
                   <ColumnOne>
                   <p>“We have worked with Kayak on two key Gabriele events
where Suki headlined and presented the best of Wellbeing
in the Workplace. Her energy, passion and knowledge are
key to the success of these events. She brings her own real
life experiences, But also provides vital statistics and
solutions that inspire and provoke.”</p>

                   </ColumnOne>
                <ColumnTwo>
                {data.allFile.edges.map((image,key) =>(
                          <Images key={key} fluid={image.node.childImageSharp.fluid}/>                                       
                          ))}
                </ColumnTwo>

                   </ContentWrapper>
       </AboutConatiner>
    )
}

export default About

const AboutConatiner = styled.div`
width:100%;
background:#fcfcfc;
color:#000;
padding:5rem calc((100vw - 1300px) / 2);
height:100%;
`
const TopLine = styled.div`
color:red;
font-size:4rem;
padding-left:2rem;
margin-bottom:0.75rem;
`
const ContentWrapper = styled.div`
display:grid;
 grid-template-columns: 1fr 1fr;
 padding:0 2rem;
 p{
    line-height:2;
 }

 @media screen and (max-width:768px){
     grid-template-columns: 1fr;
 }
`
const ColumnOne = styled.div`
display:grid;
grid-template-rows: 1fr;
margin-top:4rem;
`
const ColumnTwo = styled.div`

`

const Images = styled(Img)`
border-radius:10px;
height:100%;
`