import { IBoard, IBoardSize } from "./interfaces/IBoardState";

export const getBoardOfSize = (size: IBoardSize): IBoard => ({
  tiles: new Array(size[0] * size[1])
    .fill(0)
    .map(() => ({ isMine: !!Math.round(Math.random()) })),
  size,
});
