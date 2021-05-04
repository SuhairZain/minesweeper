import { ITileVisibilityState } from "../interfaces/IBoardState";
import { styled } from "../../interfaces/Styles";
import { css } from "@emotion/css";
import redFlag from "../images/red-flag.svg";
import explosion from "../images/icons8-explosion-24.png";
import { CSSProperties } from "react";

const styles = styled({
  root: {
    height: 40,
    width: 40,
  },
  content: {
    backgroundColor: "#3D7CEB",
    borderRadius: 4,
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  clickable: {
    cursor: "pointer",
  },
  unveiled: {
    backgroundColor: "#4b505b",
  },
  flagged: {
    backgroundColor: "#edc9af",
  },
  mine: {
    backgroundColor: "#CD5F66",
  },
  flag: {
    width: 24,
    height: 24,
  },
  nearbyMines: {
    fontWeight: "bolder",
    fontSize: 16,
  },
});

const getColorForNearbyMines = (nearbyMines: number) => {
  switch (nearbyMines) {
    case 1:
      return "#77dd77";
    case 2:
      return "#e3fd96";
    case 3:
      return "#fdfd96";
    default:
      return "#fd9696";
  }
};

export interface ITileProps {
  gameOver: boolean;
  gameWon: boolean;
  isMine: boolean;
  visibility: ITileVisibilityState;
  nearbyMines: number;
  style: CSSProperties;
  onClick: () => void;
  onRightClick: () => void;
}

export const Tile = ({
  isMine,
  visibility,
  nearbyMines,
  gameOver,
  gameWon,
  style,
  onClick,
  onRightClick,
}: ITileProps) => {
  const isUnveiled = visibility === "unveiled";
  const isFlagged = visibility === "flagged";

  const canClick = !(gameOver || gameWon) && !isUnveiled && !isFlagged;
  const clickHandler = canClick ? onClick : () => {};

  return (
    <div className={css(styles.root)} style={style}>
      <div
        className={css([
          styles.content,
          isUnveiled && styles.unveiled,
          isFlagged && styles.flagged,
          canClick && styles.clickable,
        ])}
        onClick={clickHandler}
      >
        {isFlagged && (
          <img src={redFlag} className={css(styles.flag)} alt="Flagged" />
        )}
        {gameOver && visibility !== "flagged" && isMine && (
          <img src={explosion} alt="Mine exploded" />
        )}
        {isUnveiled && !isMine && nearbyMines !== 0 && (
          <span
            className={css([styles.nearbyMines], {
              color: getColorForNearbyMines(nearbyMines),
            })}
          >
            {nearbyMines}
          </span>
        )}
      </div>
    </div>
  );
};
