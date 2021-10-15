import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { checkCard } from "../../redux/cards/cardSlice";
import Card from "../Card/Card";
import {
  GameBoard,
  PlayGroundContainer,
  WarningText,
  WarningWrapper,
} from "./styles";

const PlayGround: React.FC = () => {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.card.items);
  const openedCards = useAppSelector((state) => state.card.openedCards);

  useEffect(() => {
    if (openedCards.length === 2) {
      setTimeout(() => {
        dispatch(checkCard());
      }, 500);
    }
  }, [dispatch, openedCards]);

  return (
    <PlayGroundContainer>
      <GameBoard>
        {cards.length > 0 ? (
          cards.map((card) => <Card key={card.id} card={card} />)
        ) : (
          <WarningWrapper>
            <WarningText>Click start button!</WarningText>
          </WarningWrapper>
        )}
      </GameBoard>
    </PlayGroundContainer>
  );
};

export default PlayGround;
