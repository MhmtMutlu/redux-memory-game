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
  width: 80%;
  height: 100%;
  margin-top: -75px;
  background-color: var(--light-grey-color);
  border: 5px solid var(--orange-color);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px 15px;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 980px) {
    width: 80%;
  }

  @media (max-width: 680px) {
    width: 95%;
  }

  @media (max-width: 370px) {
    margin-top: -70px;
  }
`;

export const WarningWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WarningText = styled.p`
  color: var(--purple-color);
  font-size: 30px;
  font-weight: bold;
`;
