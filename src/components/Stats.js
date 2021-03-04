import React from 'react'
import styled from 'styled-components'
import {EarthStatsIcon, AirStatsIcon, MoneyStatsIcon} from "../components/core/icons"

const StatsData = [
    {
        icon: <EarthStatsIcon css={
                             
            `
            color:#0475d4;
            
            `
        } />,
        title: "Over 200 Destination",
        desc:"travel all around the world",
    },
    {
        icon: <AirStatsIcon css={
                             
            `
            color:#FF5733;
            
            `
        }/>,
        title: "Over 200 Destination",
        desc:"travel all around the world",
    },
    {
        
        title: "Over 200 Destination",
        desc:"travel all around the world",
    },
    {
        icon: <MoneyStatsIcon css={
                             
            `
            color:#FF0099  ;
            
            `
        }/>,
        title: "Over 200 Destination",
        desc:"travel all around the world",
    },
]


const Stats = () => {
    return (
      <StatsConatiner>
          <Heading>Why Choose Us?</Heading>
          <Wrapper>
              {StatsData.map((item,index) => {
                  return (
                      <StatsBox key={index} >
                          <Icon>{item.icon}</Icon>
                          <Title>{item.title}</Title>
                          <Description>{item.desc}</Description >
                      </StatsBox>
                  )
              })}
          </Wrapper>
      </StatsConatiner>
    )
}

export default Stats

const StatsConatiner =styled.div`
width:100%;
background:#fff;
color:#000;
display:flex;
flex-direction:column;
justify-content:center;
padding:4rem calc((100vw - 1300px) / 2);

`

const Heading = styled.h1`
text-align:start;
font-size:clamp(1.5rem, 5vw, 2rem);
margin-bottom:3rem;
padding:0 2rem;

`

const Wrapper = styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr);
grid-gap:10px;

@media screen and (max-width:768px){
    grid-template-columns:1fr;
}
`
const StatsBox = styled.div`
height:100%;
width:100%;
padding:2rem;


`

const Icon = styled.div`
font-size:3rem;
margin-bottom: 1rem;
`

const Title = styled.div`
font-size: clamp(1rem, 2.5vw, 1.5rem);
margin-bottom: 0.5rem;
`

const Description = styled.p`



`
