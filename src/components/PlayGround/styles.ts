import styled from "styled-components";

export const PlayGroundContainer = styled.div`
  grid-area: PlayGround;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ced4da;
`;

export const GameBoard = styled.div`
  width: 60%;
  height: 90%;
  margin-top: -180px;
  background-color: var(--light-grey-color);
  border: 5px solid var(--orange-color);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 980px) {
    width: 80%;
  }

  @media (max-width: 680px) {
    width: 90%;
  }

  @media (max-width: 370px) {
    margin-top: -120px;
  }
`;