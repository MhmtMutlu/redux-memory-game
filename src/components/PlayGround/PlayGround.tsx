import React from "react";
import { GameBoard, PlayGroundContainer } from "./styles";

const PlayGround: React.FC = () => {
  return (
    <PlayGroundContainer>
      <GameBoard />
    </PlayGroundContainer>
  );
};

export default PlayGround;
