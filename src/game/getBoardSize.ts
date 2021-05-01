import { IBoard } from "../interfaces/IBoardState";

export const getBoardSize = (board: IBoard) => Math.sqrt(board.tiles.length);
