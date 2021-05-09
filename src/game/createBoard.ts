import { getNearbyTiles } from "./getNearbyTiles";
import { IBoard, IBoardSize, IGameLevel } from "./interfaces/IBoardState";

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const getRandomItem = <T>(items: T[]): T => {
  return items[getRandomInt(items.length)];
};

export const createBoard = (
  level: IGameLevel,
  initialIndex: number
): IBoard => {
  const { size, mines } = level;

  if (mines > size[0] * size[1] - 9) {
    throw new Error("Board cannot be full of mines");
  }

  const initialIndexAndNearby = [initialIndex].concat(
    getNearbyTiles(size, initialIndex)
  );

  let indicesToRandomlyPlaceMines = new Array(size[0] * size[1])
    .fill(0)
    .map((_, i) => i)
    .filter((_, i) => !initialIndexAndNearby.some((index) => index === i));

  const mineIndices: number[] = [];
  for (let i = 0; i < mines; ++i) {
    const randomIndex = getRandomItem(indicesToRandomlyPlaceMines);
    mineIndices.push(randomIndex);

    indicesToRandomlyPlaceMines = indicesToRandomlyPlaceMines.filter(
      (i) => i !== randomIndex
    );
  }

  return {
    tiles: new Array(size[0] * size[1])
      .fill(0)
      .map((_, i) => i)
      .map((i) => ({ isMine: mineIndices.includes(i) })),
    size,
  };
};
