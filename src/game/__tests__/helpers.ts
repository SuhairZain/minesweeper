import { IBoard } from "../interfaces/IBoardState";
import { getBoardSize } from "../getBoardSize";

export const formatBoard = (board: IBoard, positions: number[]) => {
  const { tiles } = board;

  const boardSize = getBoardSize(board);

  let formattedBoard: string = "";
  for (let i = 0; i < tiles.length; i += boardSize[1]) {
    formattedBoard += `\n${tiles
      .slice(i, i + boardSize[1])
      .map((t, i2) => {
        const index = i + i2;

        return t.isMine
          ? positions.some((p) => p === index)
            ? "💣"
            : "🧨"
          : positions.some((p) => p === index)
          ? "💎"
          : "📜";
      })
      .join(" ")}`;
  }

  return formattedBoard;
};

export const sortNumbers = (a: number, b: number) => a - b;
