import { IBoard } from "../../interfaces/IBoardState";
import { getBoardSize } from "../getBoardSize";

export const formatBoard = (board: IBoard) => {
  const { tiles } = board;

  const boardSize = getBoardSize(board);

  let formattedBoard: string = "";
  for (let i = 0; i < tiles.length; i += boardSize) {
    formattedBoard += `\n${tiles
      .slice(i, i + boardSize)
      .map((t) => (t.isMine ? "🧨" : "📜"))
      .join(" ")}`;
  }

  return formattedBoard;
};
