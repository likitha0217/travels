import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../assets/videos/travels.mp4'

const Hero = () => {
    return (
        <HeroaboutContainer>
            <HeroaboutBg>
                <VideoBG src={Video} type="video/mp4" autoPlay loop muted playsInline />
            </HeroaboutBg>
             <HeroaboutContent>
                 <HeroaboutItems>
                     <HeroaboutH1>Unreal Designation</HeroaboutH1>
                     <HeroaboutP>Its a beautiful View </HeroaboutP>
                     <Button primary="true" round="true" to="/trips">Travel Now</Button>

                 </HeroaboutItems>

             </HeroaboutContent>
        </HeroaboutContainer>
    )
}

export default Hero
const HeroaboutContainer = styled.div`
background: #0c0c0c;
display:flex;
color: #fff;
justify-content:center;
align-items:center;
height:100vh;
padding:0 1rem;
position:relative;
margin-top:-80px;

:before{
    content:"";
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    z-index:2;
    background: linear-gradient(
        180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% 
        ),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100% );


}


`
const HeroaboutBg = styled.div`
position: absolute;
top:0;
color:#fff;
bottom:0;
right:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`

const VideoBG = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;

`
const HeroaboutContent = styled.div`
z-index:3;
height:calc(100vh - 80px);
max-height:100%;
padding:0rem calc((100vw - 1300px) / 2);

`
const HeroaboutItems = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 text-align:center;
 height:100vh;
 max-height:100%
 padding:0;
 color:#fff;
 line-height:1.1;
 font-weight:bold;
`

const HeroaboutH1 = styled.h1`
   font-size:clamp(1.5rem, 6vw, 4rem);
   margin-bottom:1.5rem;
   letter-spacing: 3px;
   padding:0 1rem;
`

const HeroaboutP = styled.p`
font-size:clamp(1rem, 3vw, 3rem);
margin-bottom:2rem;

`