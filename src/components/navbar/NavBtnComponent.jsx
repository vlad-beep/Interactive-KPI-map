import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const NavBtnContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

// const NavBtnDetailsLink = styled.button`
//   border: 0;
//   outline: 0;
//   padding: 8px 1em;
//   color: black;
//   font-size: 13px;
//   font-weight: 600;
//   border-radius: 20px;
//   border: 2px solid #00346E;
//   background-color: #FFFFFF;
//   transition: all 240ms ease-in-out;
//   cursor: pointer;
//   &:hover {
//     background: #00346E;
//         transition:all 0.3s ease-in-out;
//         color: #FFFFFF;
//   }
//   &:not(:last-of-type) {
//     margin-right: 7px;
//   }
// `

const NavBtnReportLink = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #d25656;
  border: 2px solid #d25656;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function NavBtnComponent(props) {
  return (
    <NavBtnContainer>
      <Link to="/Problems">
        <NavBtnReportLink>Повідомити про проблему</NavBtnReportLink>
      </Link>
    </NavBtnContainer>
  );
}
