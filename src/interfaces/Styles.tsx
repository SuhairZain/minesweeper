import React from "react";

export type IGetStyles<T extends Record<string, React.CSSProperties>> = (
  createStyles: () => T
) => T;

export function styled<T extends Record<string, React.CSSProperties>>(g: T) {
  return g;
}
