import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 15%;
  user-select: none;
  height: 15%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;

  &.opened {
    transform: rotateY(180deg);
  }

  &.matched {
    transform: rotateY(180deg);
    .back {
      box-shadow: 0 0 0 2px rgba(#000, 0.05) inset;
      animation: selected 0.8s 0s ease 1;
      animation-fill-mode: both;
      opacity: 0.2;
    }
  }
`;

export const FrontOfCard = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid var(--orange-color);
  transition: 0.6s;
  background: var(--purple-color);
  font-size: 50px;
  line-height: 120px;
  cursor: pointer;
  color: var(--orange-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackOfCard = styled.div`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: 0.6s;
  background: var(--orange-color);
  transform: rotateY(180deg);
  line-height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  height: 70%;
`;
