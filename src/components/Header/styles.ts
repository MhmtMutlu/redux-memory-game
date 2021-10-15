import styled from "styled-components";

export const HeaderContainer = styled.div`
  grid-area: Header;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0 100px;
  background-color: var(--purple-color);
  color: var(--orange-color);
  border-bottom: 5px solid var(--orange-color);

  @media (max-width: 440px) {
    padding: 50px 0 120px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderTitle = styled.h1`
  font-size: 50px;

  @media (max-width: 480px) {
    font-size: 30px;
  }

  @media (max-width: 260px) {
    font-size: 20px;
  }
`;

export const Score = styled.h3`
  font-size: 30px;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const StartButton = styled.button`
  color: var(--purple-color);
  background-color: var(--orange-color);
  font-size: 25px;
  font-weight: bold;
  padding: 5px 20px;
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  transition: 0.4s;

  @media (max-width: 480px) {
    font-size: 15px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
