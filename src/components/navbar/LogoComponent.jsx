import React from "react";
import styled from "styled-components";
import logo from '../../assets/logo.png'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`

  img {
    width: 50px;
        height: 50px;
  }
`;

const LogoText = styled.h2`
  text-decoration: none;
        margin: 0;
        margin-left: 5px;
        font-weight: 800;
        cursor: default;
`;

export function LogoComponent(props) {
  return (
    <LogoContainer>
      <LogoImg>
        <img src={logo} alt="Kpi logo" />
      </LogoImg>
      <LogoText>Інтерактивна карта КПІ</LogoText>
    </LogoContainer>
  );
}