import { IBoardState } from "../interfaces/IBoardState";
import { Tile } from "./Tile";
import { styled } from "../interfaces/Styles";
import { getBoardSize } from "../game/getBoardSize";
import { getNearbyMines } from "../game/getNearbyMines";

const styles = styled({
  root: {
    backgroundColor: "#12161F",
    borderRadius: 4,
    padding: 1,
    flexWrap: "wrap",
  },
});

export interface IBoardProps {
  state: IBoardState;
}

export const Board = ({ state }: IBoardProps) => {
  const { board, visibilityState } = state;

  const boardSize = getBoardSize(board);
  const childFlex = `1 0 ${100 / boardSize}%`;

  return (
    <div
      style={{ ...styles.root, width: boardSize * 40 + (boardSize + 1) * 1 }}
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
            gameOver={state.gameOver || true}
            style={{ flex: childFlex }}
          />
        );
      })}
    </div>
  );
};
