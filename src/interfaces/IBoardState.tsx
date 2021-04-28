export type IMineVisibilityState = "obscure" | "unveiled" | "flagged";

export interface ITileState {
  visibility: IMineVisibilityState;
  isMine: boolean;
}

export interface IBoardState {
  tiles: ITileState[];
  gameOver: boolean;
}
