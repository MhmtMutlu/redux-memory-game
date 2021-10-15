import React from "react";
import { HeaderContainer, HeaderTitle, Score, StartButton } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Catch and Match</HeaderTitle>
      <Score>Score: 100</Score>
      <StartButton>Start</StartButton>
    </HeaderContainer>
  );
};

export default Header;
