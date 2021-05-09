import { CSSProperties } from "react";
import { styled } from "../interfaces/Styles";
import { css } from "@emotion/css";
import restartIcon from "../images/restart.svg";
import { IGameLevels, IGameLevelTitle } from "../game/interfaces/IBoardState";

import "./LevelAndRestartButton.css";

export interface ILevelAndRestartButtonProps {
  currentLevel: IGameLevelTitle;
  levels: IGameLevels;
  style?: CSSProperties;
  onRestartClick: () => void;
  onLevelChange: (level: IGameLevelTitle) => void;
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

export function objectKeys<TKey extends string | symbol | number>(
  o: Record<TKey, any>
): TKey[] {
  return Object.keys(o) as any;
}

export const LevelAndRestartButton = ({
  currentLevel,
  levels,
  style,
  onRestartClick,
  onLevelChange,
}: ILevelAndRestartButtonProps) => {
  const levelTitles = objectKeys(levels);

  return (
    <div className={css(styles.root)} style={style}>
      <div className="level-select">
        <select
          value={currentLevel}
          onChange={(e) => onLevelChange(e.target.value as any)}
        >
          {levelTitles.map((level) => {
            return <option key={level}>{level}</option>;
          })}
        </select>
      </div>
      <div className={css(styles.restartButton)} onClick={onRestartClick}>
        <img src={restartIcon} width={24} height={24} />
      </div>
    </div>
  );
};
