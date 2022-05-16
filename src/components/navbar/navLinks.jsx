import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavMenu = styled.ul`
 margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
    height: 100%;
  padding: 0 ;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
`

const NavLink = styled(Link)`
 display: flex;
 height: 100%;
 color: black;
 text-decoration: none;
 align-items:center;
 padding: 0 1em;
 border-bottom: 2px solid transparent;
 transition: all 200ms ease-in-out;
 cursor: pointer;
    
    &:hover{
 border-bottom: 2px solid #00346E;
 transition:all 0.1s ease-in-out;
}
`;


export function NavLinks(props) {
  return (
    <NavLinksContainer>
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
      </NavMenu> 
    </NavLinksContainer>
);
}