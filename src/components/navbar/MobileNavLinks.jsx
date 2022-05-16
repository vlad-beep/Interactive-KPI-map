import React, { useState } from "react";
import styled from "styled-components";
import { NavBtnComponent } from "./NavBtnComponent";
import {NavLink as Link} from 'react-router-dom';
import { MenuToggle } from "./menuToggle";

const NavMenu = styled.ul`
margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 75px;
  left: 0;
`;
const LinkItem = styled.li`
width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
 margin-top: 20px;
`
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
 color: black;
 text-decoration: none;
 padding: 0 1em;

 border-bottom: 2px solid transparent;
 transition: all 200ms ease-in-out;
 cursor: pointer;
    
    &:hover{
      width:100%;
 border-bottom: 2px solid #00346E;
 transition:all 0.1s ease-in-out;
}
`;

const Marginer = styled.div`
  height:2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
  <NavMenu> 
  <LinkItem>
  <NavLink to="/" activeStyle>Головна</NavLink>
  </LinkItem>
    <LinkItem>
        <NavLink to="/News" activeStyle>Новини</NavLink> 
    </LinkItem>
    <LinkItem>
  <NavLink to="/Problems" activeStyle>Проблеми</NavLink>
  </LinkItem>
    <LinkItem>
  <NavLink to="/Contacts" activeStyle>Контакти</NavLink>
  </LinkItem>
    <LinkItem> 
  <NavLink to="/About" activeStyle>Про карту</NavLink>
  </LinkItem>
  <Marginer />
  <NavBtnComponent/>
  </NavMenu> 
      )}
    </NavLinksContainer>
  );
}