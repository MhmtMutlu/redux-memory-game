export type DataType = {
  name: string;
  completed: boolean;
  close: boolean;
};

export type CardsType = {
  id: number;
  name: string;
  completed: boolean;
  close: boolean;
};

export type CardsState = {
  items: Array<CardsType>;
  openedCards: Array<CardsType>;
  score: number;
};

export type CardProp = {
  card: CardsType;
}
