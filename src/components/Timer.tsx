import { CSSProperties, useEffect, useState } from "react";
import { styled } from "../interfaces/Styles";
import { css } from "@emotion/css";
import timerIcon from "../images/timer_black_24dp.svg";

export type ITimerStatus = "running" | "stopped";

export interface ITimerProps {
  status: ITimerStatus;
  style?: CSSProperties;
}

let timerId: NodeJS.Timeout;

const styles = styled({
  root: { backgroundColor: "#12161F", padding: 2, borderRadius: 4 },
  timer: {
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

export const Timer = ({ status, style }: ITimerProps) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (status === "running") {
      timerId = setInterval(() => {
        setTime((seconds) => seconds + 1);
      }, 1000);
    }

    if (status === "stopped") {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [status]);

  const seconds = `${time % 60}`.padStart(2, "0");
  const minutes = `${Math.floor(time / 60)}`.padStart(2, "0");

  return (
    <div className={css(styles.root)} style={style}>
      <div className={css(styles.content, styles.timer)}>
        <img src={timerIcon} />
      </div>
      <div className={css(styles.content)}>{minutes}</div>
      <div className={css(styles.content)}>{seconds}</div>
    </div>
  );
};
