import { getStyles } from "../interfaces/Styles";

const createStyles = getStyles(() => ({
  root: {
    height: 40,
    width: 40,
    backgroundColor: "#3D7CEB",
    borderRadius: 4,
    margin: 1,
  },
}));

export const Tile = () => {
  const styles = createStyles();

  return <div style={styles.root} />;
};
