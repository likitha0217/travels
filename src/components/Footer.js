import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>
                        Explore
                    </h1>
                    <p>We strive to create the best experiences for
                        our customer
                    </p>
                </FooterDesc>
                <FooterLinksItem>
                    <FooterLinksTitle>Contact Us</FooterLinksTitle>
                    <FooterLink to="/contact">Contact</FooterLink>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/support">Support</FooterLink>
                    <FooterLink to="/destination">Destination</FooterLink>
                </FooterLinksItem>

            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinksItem>
                    <FooterLinksTitle>Videos</FooterLinksTitle>
                    <FooterLink to="/contact">Contact</FooterLink>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/support">Support</FooterLink>
                    <FooterLink to="/destination">Destination</FooterLink>
                </FooterLinksItem>
                <FooterLinksItem>
                    <FooterLinksTitle>Social Media</FooterLinksTitle>
                    <FooterLink to="/contact">Contact</FooterLink>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/support">Support</FooterLink>
                    <FooterLink to="/destination">Destination</FooterLink>
                </FooterLinksItem>
            </FooterLinksWrapper>
            
        </FooterContainer>
    )
}

export default Footer

const FooterContainer =styled.div`
padding:5rem calc((100vw - 1400px) / 2 );
display:grid;
grid-template-columns: repeat(2, 1fr);
color:#000;
background:#fafafb;
border-top: 1px solid #e7d8d8;

`
const FooterDesc =styled.div`
padding:0 2rem;
h1{
    margin-bottom:3rem;
    color:#f26a2e;
}
@media screen and (max-width:820px){
    grid-template-columns:  1fr;
}
`

const FooterLinksWrapper =styled.div`
display:grid;
grid-template-columns: repeat(2, 1fr);
@media screen and (max-width:820px){
    grid-template-columns:  1fr;
}
`
const FooterLinksItem =styled.h2`

display:flex;
 flex-direction:column;
 align-items:flex-start;
 padding: 1rem 2rem;

 @media screen and (max-width:400px){
     padding:1rem;
 }
`
const FooterLink =styled(Link)`
text-decoration:none;
margin-bottom:0.5rem;
font-size:14px;
color:#3d3d4e;

&:hover{
    color:#f26a2e;
    transition:0.3s ease-out;
}

`
const FooterLinksTitle =styled.div`
font-size:14px;
margin-bottom:16px;
`