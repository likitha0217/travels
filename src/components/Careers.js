import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
const Careers = () => {
    const data = useStaticQuery(graphql`

    query MyQuery {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, 
                 name: {in:["career"]}}) {
                 edges {
                   node {
                     childImageSharp {
                       fluid {
                        src
                       }
                     }
                   }
           }
         }
       }
       `)
    return (
        <CareerConatiner>
            <p class="para">Interested in joining our team but don’t see an open position that is perfect for you? 
            Please send us your resume and tell us about yourself and the skills you would like to bring to the team.
             We will contact you if a new position comes up that matches your skill set.</p>
            <ContentWrapper>
            
             <ColumnOne>
               <TopLine> Find your team   </TopLine>
               <p class="textas">Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.</p>
               <ColumnOneNest>
                <h3>Engineering & Tech</h3>
                <h3>People</h3>
                 <p>Develop the products and tools of the future for billions of users.</p>
                 
                 <p>Find, grow, and support the people who make Google great.</p>
               

               
               <h3>Sales, Service & Support</h3>
               <h3>Consumer Hardware</h3>
               <p>Equip businesses with the right tools to help them grow.</p>
               
               <p>Make people's lives better through technology.</p>
               </ColumnOneNest>
             </ColumnOne>
             <ColumnTwo>
             {data.allFile.edges.map((image,key) =>(
              <Images key={key} fluid={image.node.childImageSharp.fluid}/>                                       
                          ))}
             </ColumnTwo>
            </ContentWrapper>
            

        </CareerConatiner>
    )
}

export default Careers
const CareerConatiner = styled.div`
width:100%;
background:#fcfcfc;
color:#000;
padding:5rem calc((100vw - 1300px) / 2);
height:100%;

.para{
    padding:1rem;
    font-size:1.5rem;
    
    margin-bottom:0.75rem;
    }
`

const ContentWrapper = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;


@media screen and (max-width:768px){
    grid-template-columns: 1fr;
}
`

const ColumnOne = styled.div`
display:grid;
grid-template-columns: 1fr;
padding:1rem;
margin-top:4rem;
 .textas{
     font-size:1.3rem;
 }
`
const TopLine = styled.div`
font-size:2rem;

margin-bottom:0.75rem;
`
const ColumnOneNest = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;


@media screen and (max-width:768px){
    grid-template-columns: 1fr;
}
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

height: 40vh;
width: 35vw;
@media screen and (max-width:768px){
    width: 98vw;
    margin: 4px;

}




`