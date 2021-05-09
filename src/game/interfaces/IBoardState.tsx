export type ITileVisibilityState = "hidden" | "unveiled" | "flagged";

export interface ITile {
  isMine: boolean;
}

export type IBoardSize = [number, number];

export interface IGameLevel {
  size: IBoardSize;
  mines: number;
}

export enum IGameLevelTitle {
  Hard = "Hard",
}

export type IGameLevels = Record<IGameLevelTitle, IGameLevel>;

export interface IBoard {
  tiles: ITile[];
  size: IBoardSize;
}

export interface IBoardState {
  visibilityState: ITileVisibilityState[];
  gameOver: boolean;
}
