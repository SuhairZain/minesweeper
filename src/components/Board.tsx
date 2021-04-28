import { IBoardState } from "../interfaces/IBoardState";
import { Tile } from "./Tile";
import { getStyles } from "../interfaces/Styles";

const createStyles = getStyles(() => ({
  root: {
    flexDirection: "column",
    backgroundColor: "#12161F",
    borderRadius: 4,
    padding: 1,
  },
}));

export interface IBoardProps {
  size: number;
  state: IBoardState;
}

export const Board = ({ size, state }: IBoardProps) => {
  const rows = [];

  const styles = createStyles();

  for (let i = 0; i < size; ++i) {
    const tiles = [];

    for (let j = 0; j < size; ++j) {
      tiles.push(<Tile />);
    }

    rows.push(<div>{tiles}</div>);
  }

  return <div style={styles.root}>{rows}</div>;
};
