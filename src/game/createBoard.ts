import { IBoard } from "./interfaces/IBoardState";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomItem = <T>(items: T[]): T => {
  return items[getRandomInt(items.length)];
};

export const createBoard = (
  size: number,
  numberOfMines: number,
  initialIndex: number
): IBoard => {
  if (numberOfMines === size * size) {
    throw new Error("Board cannot be full of mines");
  }

  let indicesToRandomlyPlaceMines = new Array(size * size)
    .fill(0)
    .map((_, i) => i)
    .filter((_, i) => i !== initialIndex);

  const mineIndices: number[] = [];
  for (let i = 0; i < numberOfMines; ++i) {
    const randomIndex = getRandomItem(indicesToRandomlyPlaceMines);
    mineIndices.push(randomIndex);

    indicesToRandomlyPlaceMines = indicesToRandomlyPlaceMines.filter(
      (i) => i !== randomIndex
    );
  }

  return {
    tiles: new Array(size * size)
      .fill(0)
      .map((_, i) => i)
      .map((i) => ({ isMine: mineIndices.includes(i) })),
  };
};
