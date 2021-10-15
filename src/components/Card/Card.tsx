import React from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { openCard } from "../../redux/cards/cardSlice";
import { CardProp } from "../../types";
import { BackOfCard, CardImage, CardWrapper, FrontOfCard } from "./styles";

function Card({ card }: CardProp) {
  const dispatch = useAppDispatch();
  const handleClick = (id: number) => {
    dispatch(openCard(id));
  };

  return (
    <CardWrapper
      className={`card ${card.close ? "" : "opened"} ${
        card.completed ? "matched" : ""
      }`}
      onClick={() => handleClick(card.id)}
    >
      <FrontOfCard>?</FrontOfCard>
      <BackOfCard>
        <CardImage
          alt={card.name}
          src={
            "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
            card.name +
            ".png"
          }
        />
      </BackOfCard>
    </CardWrapper>
  );
}

export default Card;
