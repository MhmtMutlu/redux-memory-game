import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  HeaderContainer,
  HeaderTitle,
  Score,
  StartButton,
  TitleWrapper,
} from "./styles";
import { initGame, startGame } from "../../redux/cards/cardSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.card.score);

  const startGameHandler = () => {
    dispatch(startGame());
    setTimeout(() => {
      dispatch(initGame());
    }, 4000);
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Catch and Match</HeaderTitle>
      <TitleWrapper>
        <Score>Score: {score}</Score>
        <StartButton onClick={startGameHandler}>Start</StartButton>
      </TitleWrapper>
    </HeaderContainer>
  );
};

export default Header;
