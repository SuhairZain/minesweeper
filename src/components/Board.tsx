import { IBoardState } from "../interfaces/IBoardState";
import { Tile } from "./Tile";
import { styled } from "../interfaces/Styles";

const styles = styled({
  root: {
    flexDirection: "column",
    backgroundColor: "#12161F",
    borderRadius: 4,
    padding: 1,
  },
});

export interface IBoardProps {
  size: number;
  state: IBoardState;
}

export const Board = ({ size, state }: IBoardProps) => {
  const rows = [];

  for (let i = 0; i < size; ++i) {
    const tiles = [];

    for (let j = 0; j < size; ++j) {
      const { isMine } = state.tiles[i * size + j];
      const visibility = state.visibilityState[i * size + j];

      tiles.push(
        <Tile
          key={j}
          isMine={isMine}
          visibility={visibility}
          nearbyMines={
            !isMine && visibility === "unveiled"
              ? 1 + Math.floor(Math.random() * 9)
              : 0
          }
          gameOver={state.gameOver || true}
        />
      );
    }

    rows.push(<div key={i}>{tiles}</div>);
  }

  return <div style={styles.root}>{rows}</div>;
};
