import { IBoard, IBoardState } from "../interfaces/IBoardState";
import { Tile } from "./Tile";
import { styled } from "../../interfaces/Styles";
import { getBoardSize } from "../getBoardSize";
import { getNearbyMines } from "../getNearbyMines";

const styles = styled({
  root: {
    backgroundColor: "#12161F",
    borderRadius: 4,
    padding: 2,
    flexWrap: "wrap",
  },
});

export interface IBoardProps {
  board: IBoard;
  state: IBoardState;
  gameWon: boolean;
  onClick: (index: number) => void;
  onRightClick: (index: number) => void;
}

export const Board = ({
  board,
  state,
  gameWon,
  onClick,
  onRightClick,
}: IBoardProps) => {
  const { visibilityState } = state;

  const boardSize = getBoardSize(board);
  const childFlex = `1 0 ${100 / boardSize[1]}%`;

  return (
    <div
      style={{
        ...styles.root,
        width: boardSize[1] * 40 + (boardSize[1] + 1) * 1,
      }}
    >
      {board.tiles.map((tile, i) => {
        const { isMine } = tile;
        const visibility = visibilityState[i];

        return (
          <Tile
            key={i}
            isMine={isMine}
            visibility={visibility}
            nearbyMines={getNearbyMines(board, i)}
            gameWon={gameWon}
            gameOver={state.gameOver}
            style={{ flex: childFlex }}
            onClick={() => {
              onClick(i);
            }}
            onRightClick={() => onRightClick(i)}
          />
        );
      })}
    </div>
  );
};
