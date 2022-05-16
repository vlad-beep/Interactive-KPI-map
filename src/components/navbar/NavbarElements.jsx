import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
width: 100%;
height: 75px;
box-shadow: 0px 1px 3px rgba(15, 15, 15, 0.5);
background:rgb(255, 255, 255);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1600px) / 2);
z-index: 10;
`


export const LogoContainer = styled.nav`
     display: flex;
     align-items: center;
     img{
        width: 50px;
        height: 50px;
    }
    h2{
        text-decoration: none;
        margin: 0;
        margin-left: 5px;
        font-weight: 800;
        cursor: default;
    }
    @media screen and (max-width: 1024px){
        margin-left: 25px;
       font-size: 10px;
    }
`
export const NavMenu = styled.div`
margin: 0; 
padding: 0;
height: 100%;
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 1024px){
    display: none;
}
`

export const NavLink = styled(Link)`
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
`
export const Bars = styled(FaBars)`
display: none;


@media screen and (max-width: 1024px){
display: block;
position:absolute;
top: 0;
left: 0;
transform: translate(100%, 220%);
font-size: 1,8rem;
cursor: pointer;
}
`



export const NavBtn = styled.div`
display:flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 1024px){
    margin-right: 0;
}

`

export const NavBtnDetailsLink = styled.button`
padding: 7px 22px;
    border: 2px solid #00346E;
    background: #FFFFFF;
    border-radius:20px; 
    margin-right :24px ;
    transition:all 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
        background: #00346E;
        transition:all 0.3s ease-in-out;
        color: #FFFFFF;
    }
   
@media screen and (max-width: 1140px){
    display: none;
}
`
export const NavBtnReportLink = styled.button`
   padding: 7px 22px;
    background: #D25656;
    border: 2px solid #D25656;
    border-radius: 20px;  
    color: #FFFFFF;
    cursor: pointer;

    @media screen and (max-width: 1024px){
    font-size: 10px;
    margin-right: 30px;
}
`