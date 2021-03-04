import { Link } from "gatsby"
import React, { useState } from 'react';
import styled from 'styled-components'


import { slide as Menu } from 'react-burger-menu'
import { Button } from "./Button"
import Logo from "./Logo";

const Header = () => {

  const [menuState, setMenuOpen] = useState({menuOpen: false});

  const closeMenu = () => {
    setMenuOpen({menuOpen: false})
  }

  return (
  <Nav>
        <NavLink to="/">
        
          <Logo />
        </NavLink>
     <TopNav className="sticky-top">
           
            
           <NavItems>
             <Link to="/about" >About</Link>
             <Link to="/trips" >Trips</Link>
             <Link to="/careers">Careers</Link>
             <Link to="/Contact">Contact</Link>
           </NavItems>



           <SideMenu>
             <Menu isOpen={ menuState.menuOpen }>

               <Link className="menu-item" to="/" onClick={() => closeMenu() }>
                 Home
               </Link>
               
               <Link className="menu-item" to="/services" onClick={() => closeMenu() }>
               Our Services
               </Link>

               <Link className="menu-item" to="/client" onClick={() => closeMenu() }>
               Client
               </Link>

               <Link className="menu-item" to="/contact" onClick={() => closeMenu() }>
               Contact
               </Link>

               

             </Menu>
           </SideMenu>

       </TopNav>

     <NavBtn>
      <Button  to="/trips" primary="true" round="true"
      css={`
      width:220px;`}> Book Free Consulation</Button>
     </NavBtn>
     
     </Nav>
  )
}


export default Header

const Nav=styled.nav`

background:transparent;
height:80px;
display:flex;
justify-content:space-between;
padding:0.5rem calc(100vw-1300px) -2);
z-index:100;
position:relative;
`


const NavBtn =styled.div`
 display:flex;
 align-items:center;
 margin-right:24px;
}
@media screen and (max-width:768px){
  display:none;
}
`
const TopNav = styled.div`
  display: contents;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fafafa;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1101;
  
  @media(max-width: 721px) {
    display: flex;
  }
`
const NavItems = styled.div`
  display: block;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin-top:30px;

  a {
    color: #fff;
    font-weight:700;
    text-align: left;
    padding: 1em;
    text-decoration: none;
    font-size: 1em;
    &:hover {
      color: #333;
    }
  }
  @media(max-width: 721px) {
    display: none;
  }
`

const SideMenu =  styled.div`
    /* Individual item */
    .bm-item {
      display: inline-block;
      /* Our sidebar item styling */
      text-decoration: none;
      margin-bottom: 10px;
      color: #d1d1d1;
      transition: color 0.2s;
    }
    /* Change color on hover */
    .bm-item:hover {
      color: white;
    }
    /* The rest copied directly from react-burger-menu docs */
    /* Position and sizing of burger button */
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
    }
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #ffffff;
    }
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }
    /* General sidebar styles */
    .bm-menu {
      background: #373a47;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }
    /* Wrapper for item list */
    .bm-item-list {
      color: #b8b7ad;
    }
    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    @media(min-width: 720px) {
      display: none;
    }
`
const NavLink =styled(Link)`
  color:#fff;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding: 0 1rem;
  height:100%;
  cursor:pointer;

  img{
   

  }
  @media(max-width: 720px) {
    width:100%;
    img{
      
      
  
    }


    

  }
`