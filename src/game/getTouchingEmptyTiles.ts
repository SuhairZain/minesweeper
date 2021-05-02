import { subtractArrayFromArray } from "../utils/arrays";
import { getNearbyMines } from "./getNearbyMines";
import { getNearbyTiles } from "./getNearbyTiles";
import { IBoard } from "./interfaces/IBoardState";

export const getTouchingEmptyTiles = (
  board: IBoard,
  position: number,
  visitedTiles: number[] = [position]
): number[] => {
  const adjacentTiles = getNearbyTiles(board, position);
  const nonMineTiles = adjacentTiles.filter(
    (index) => !board.tiles[index].isMine
  );

  const nonVisitedNonMineTiles = subtractArrayFromArray(
    nonMineTiles,
    visitedTiles
  );

  let updatedVisitedTiles = visitedTiles.concat(nonVisitedNonMineTiles);

  return nonVisitedNonMineTiles.reduce((acc, curr) => {
    const touchingTiles = getTouchingEmptyTiles(
      board,
      curr,
      updatedVisitedTiles
    );
    updatedVisitedTiles = updatedVisitedTiles.concat(touchingTiles);
    return acc.concat(touchingTiles);
  }, nonVisitedNonMineTiles);
};
