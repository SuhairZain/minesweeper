import { CSSProperties } from "react";
import { styled } from "../interfaces/Styles";
import { css } from "@emotion/css";
import redFlag from "../images/red-flag.svg";

export interface IRemainingFlagsCountProps {
  count: number;
  style?: CSSProperties;
}

const styles = styled({
  root: { backgroundColor: "#12161F", padding: 2, borderRadius: 4 },
  flagIcon: {
    backgroundColor: "#12161F",
  },
  content: {
    height: 40,
    width: 40,
    borderRadius: 4,
    backgroundColor: "#4b505b",
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignSelf: "stretch",
    color: "white",
  },
});

export const RemainingFlagsCount = ({
  count,
  style,
}: IRemainingFlagsCountProps) => {
  return (
    <div className={css(styles.root)} style={style}>
      <div className={css(styles.content)}>{count}</div>
      <div className={css(styles.content, styles.flagIcon)}>
        <img src={redFlag} width={24} height={24} />
      </div>
    </div>
  );
};
