import { IBoard, IBoardSize } from "./interfaces/IBoardState";
import { getBoardSize } from "./getBoardSize";

const isSizeTuple = (
  boardOrBoardSize: IBoard | IBoardSize
): boardOrBoardSize is IBoardSize => {
  return Array.isArray(boardOrBoardSize);
};

export function getNearbyTiles(
  boardOrBoardSize: IBoard | IBoardSize,
  position: number
): number[] {
  if (!isSizeTuple(boardOrBoardSize)) {
    return getNearbyTiles(getBoardSize(boardOrBoardSize), position);
  }

  const boardSize = boardOrBoardSize;

  const i = Math.floor(position / boardSize[1]);
  const j = position % boardSize[1];

  const tiles = [
    [i - 1, j - 1],
    [i, j - 1],
    [i + 1, j - 1],
    [i - 1, j],
    [i + 1, j],
    [i - 1, j + 1],
    [i, j + 1],
    [i + 1, j + 1],
  ];

  return tiles.reduce((acc, curr) => {
    const [i, j] = curr;

    if (i < 0 || j < 0 || i >= boardSize[0] || j >= boardSize[1]) {
      return acc;
    }

    const index = i * boardSize[1] + j;

    if (acc.some((nDI) => nDI === index)) {
      return acc;
    }

    return acc.concat(index);
  }, []);
}
