export type ITileVisibilityState = "hidden" | "unveiled" | "flagged";

export interface ITile {
  isMine: boolean;
}

export interface IBoard {
  tiles: ITile[];
}

export interface IBoardState {
  tiles: ITile[];
  visibilityState: ITileVisibilityState[];
  gameOver: boolean;
}
