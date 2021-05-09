import { CSSProperties } from "react";
import { styled } from "../interfaces/Styles";
import { css } from "@emotion/css";
import restartIcon from "../images/restart.svg";
import { IGameLevels, IGameLevelTitle } from "../game/interfaces/IBoardState";

export interface ILevelAndRestartButtonProps {
  currentLevel: IGameLevelTitle;
  levels: IGameLevels;
  style?: CSSProperties;
  onRestartClick: () => void;
}

const styles = styled({
  root: {
    backgroundColor: "#12161F",
    padding: 2,
    paddingLeft: 3,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  level: {
    color: "white",
    width: 120,
    paddingLeft: 8,
    backgroundColor: "#4b505b",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 4,
    height: 40,
  },
  restartButton: {
    height: 40,
    width: 40,
    borderRadius: 4,
    margin: 1,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "#3D7CEB",
    cursor: "pointer",
    marginLeft: 2,
  },
});

export const LevelAndRestartButton = ({
  currentLevel,
  style,
  onRestartClick,
}: ILevelAndRestartButtonProps) => {
  return (
    <div className={css(styles.root)} style={style}>
      <div className={css(styles.level)}>{currentLevel}</div>
      <div className={css(styles.restartButton)} onClick={onRestartClick}>
        <img src={restartIcon} width={24} height={24} />
      </div>
    </div>
  );
};
