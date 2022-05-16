import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from "react-responsive"
import{NavBtnComponent} from './NavBtnComponent'
import { LogoComponent } from './LogoComponent.jsx'
import{NavLinks} from './navLinks'
import { DeviceSize } from "../responsive"
import{MobileNavLinks} from './MobileNavLinks'

const Nav = styled.div`
  width: 100%;
height: 75px;
box-shadow: 0px 1px 3px rgba(15, 15, 15, 0.5);
background:rgb(255, 255, 255);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1600px) / 2);
z-index: 10;
`;

const LeftSide = styled.div`
  display: flex;
`

const MiddleSide = styled.div`
  display: flex;

`
const RightSide = styled.div `
    display: flex;
`
export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  return (
    <Nav>
      <LeftSide>
      <LogoComponent/>
   </LeftSide>
   <MiddleSide> 
   {!isMobile && <NavLinks />}
     </MiddleSide>
     <RightSide>
     {!isMobile && <NavBtnComponent />}
        {isMobile && <MobileNavLinks />}
     </RightSide>
    </Nav>
  )
}


