import React from "react";

export type IGetStyles<T extends Record<string, React.CSSProperties>> = (
  createStyles: () => T
) => T;

export const getStyles = <T extends () => Record<string, React.CSSProperties>>(
  g: T
) => g;
