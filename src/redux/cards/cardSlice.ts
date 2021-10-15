import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardsState, CardsType } from "../../types";
import cardsData from "./data";
import mixCards from "./utils";

export const cardSlice = createSlice({
  name: "cards",
  initialState: {
    items: [],
    openedCards: [],
    score: 100,
  } as CardsState,
  reducers: {
    openCard: (state, action: PayloadAction<number>) => {
      const filteredCard: CardsType | undefined = state.items.find(
        (item) => item.id === action.payload
      ) as CardsType;
      state.openedCards.push(filteredCard);
      filteredCard.close = false;
    },
    checkCard: (state) => {
      if (
        state.openedCards[0].name === state.openedCards[1].name &&
        state.openedCards[0].id !== state.openedCards[1].id
      ) {
        const firstFilteredCard: CardsType | undefined = state.items.find(
          (item) => item.id === state.openedCards[0].id
        ) as CardsType;
        const secondFilteredCard: CardsType | undefined = state.items.find(
          (item) => item.id === state.openedCards[1].id
        ) as CardsType;
        firstFilteredCard.completed = secondFilteredCard.completed = true;
        state.score += 50;
        state.openedCards = [];
      } else {
        const firstFilteredCard: CardsType | undefined = state.items.find(
          (item) => item.id === state.openedCards[0].id
        ) as CardsType;
        const secondFilteredCard: CardsType | undefined = state.items.find(
          (item) => item.id === state.openedCards[1].id
        ) as CardsType;
        firstFilteredCard.close = secondFilteredCard.close = true;
        if (state.openedCards[0].id !== state.openedCards[1].id) {
          state.score -= 10;
        }
        state.openedCards = [];
      }
    },
    initGame: (state) => {
      state.items.map((item) => (item.close = true));
    },
    startGame: (state) => {
      state.items = mixCards(cardsData);
      state.score = 100;
    },
  },
});

export const { openCard, checkCard, startGame, initGame } = cardSlice.actions;
export default cardSlice.reducer;
