import { CardsType, DataType } from "../../types";

const mixCards = (array: Array<DataType>): Array<CardsType> => {
  const dupArray = [...array, ...array].map((item, id) => ({
    id,
    ...item,
  }));

  for (let i = dupArray.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * i + 1);
    [dupArray[randomIndex], dupArray[i]] = [dupArray[i], dupArray[randomIndex]];
  }

  return dupArray;
};

export default mixCards;
