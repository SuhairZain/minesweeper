import { IBoard } from "./interfaces/IBoardState";
import { getBoardSize } from "./getBoardSize";

export function getNearbyTiles(
  boardOrBoardSize: IBoard | number,
  position: number
): number[] {
  if (typeof boardOrBoardSize !== "number") {
    return getNearbyTiles(getBoardSize(boardOrBoardSize), position);
  }

  const boardSize = boardOrBoardSize;

  const i = Math.floor(position / boardSize);
  const j = position % boardSize;

  return [
    [i - 1, j - 1],
    [i, j - 1],
    [i + 1, j - 1],
    [i - 1, j],
    [i + 1, j],
    [i - 1, j + 1],
    [i, j + 1],
    [i + 1, j + 1],
  ].reduce((acc, curr) => {
    const [i, j] = curr;

    if (i < 0 || j < 0 || i >= boardSize || j >= boardSize) {
      return acc;
    }

    const index = i * boardSize + j;

    if (acc.some((nDI) => nDI === index)) {
      return acc;
    }

    return acc.concat(index);
  }, []);
}
