import React from "react";
import { HeaderContainer, HeaderTitle, Score } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Catch and Match</HeaderTitle>
      <Score>Score: 100</Score>
    </HeaderContainer>
  );
};

export default Header;
