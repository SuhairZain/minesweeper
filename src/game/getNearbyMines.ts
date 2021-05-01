import { IBoard } from "../interfaces/IBoardState";
import { getNearbyTiles } from "./getNearbyTiles";

export const getNearbyMines = (board: IBoard, position: number) => {
  return getNearbyTiles(board, position).reduce(
    (acc, p) => acc + (board.tiles[p].isMine ? 1 : 0),
    0
  );
};
