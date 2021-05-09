import { IBoard, IBoardSize } from "../interfaces/IBoardState";
import { getBoardSize } from "../getBoardSize";
import { getNearbyTiles } from "../getNearbyTiles";
import { formatBoard, sortNumbers } from "./helpers";
import { createBoard } from "../createBoard";

const getBoardOfSize = (size: IBoardSize): IBoard => ({
  tiles: new Array(size[0] * size[1])
    .fill(0)
    .map(() => ({ isMine: !!Math.round(Math.random()) })),
  size,
});

const boardSize_2 = getBoardOfSize([2, 2]);
const boardSize_3 = getBoardOfSize([3, 3]);
const boardSize_4 = getBoardOfSize([4, 4]);
const boardSize_5 = getBoardOfSize([5, 5]);
const boardSize_5_10 = createBoard({ size: [5, 10], mines: 10 }, 8);

const inputAndExpected: {
  input: { board: IBoard; position: number };
  expectedTilesNearby: number[];
}[] = [
  ...[0, 1, 2, 3].map((position, _, arr) => ({
    input: {
      board: boardSize_2,
      position,
    },
    expectedTilesNearby: arr.filter((n) => n !== position).sort(),
  })),
  {
    input: { board: boardSize_3, position: 0 },
    expectedTilesNearby: [1, 3, 4],
  },
  {
    input: { board: boardSize_3, position: 1 },
    expectedTilesNearby: [0, 2, 3, 4, 5],
  },
  {
    input: { board: boardSize_3, position: 2 },
    expectedTilesNearby: [1, 4, 5],
  },
  {
    input: { board: boardSize_3, position: 3 },
    expectedTilesNearby: [0, 1, 4, 6, 7],
  },
  {
    input: { board: boardSize_3, position: 4 },
    expectedTilesNearby: [0, 1, 2, 3, 5, 6, 7, 8],
  },
  {
    input: { board: boardSize_3, position: 5 },
    expectedTilesNearby: [1, 2, 4, 7, 8],
  },
  {
    input: { board: boardSize_3, position: 6 },
    expectedTilesNearby: [3, 4, 7],
  },
  {
    input: { board: boardSize_3, position: 7 },
    expectedTilesNearby: [3, 4, 5, 6, 8],
  },
  {
    input: { board: boardSize_3, position: 8 },
    expectedTilesNearby: [4, 5, 7],
  },
  {
    input: { board: boardSize_5_10, position: 8 },
    expectedTilesNearby: [7, 9, 17, 18, 19],
  },
];

describe("WHEN testing getNearbyTiles", () => {
  for (const { expectedTilesNearby, input } of inputAndExpected) {
    const { position, board } = input;

    describe(`WHEN given ${formatBoard(board, [
      position,
    ])}\nand ${position}`, () => {
      it(`SHOULD be ${formatBoard(board, expectedTilesNearby)}`, () => {
        expect(
          getNearbyTiles(board, position).slice().sort(sortNumbers)
        ).toEqual(expectedTilesNearby);
      });
    });
  }

  for (const board of [boardSize_2, boardSize_3, boardSize_4, boardSize_5]) {
    const boardSize = getBoardSize(board);

    describe(`WHEN given board of size ${boardSize}`, () => {
      it("SHOULD return the correct number of tiles based on the position", () => {
        for (let position = 0; position < board.tiles.length; ++position) {
          const i = Math.floor(position / boardSize[1]);
          const j = position % boardSize[1];

          const isHorizontalEdge = i === 0 || i === boardSize[1] - 1;
          const isVerticalEdge = j === 0 || j === boardSize[0] - 1;
          const isCornerTile = isHorizontalEdge && isVerticalEdge;

          const expectedLength = isCornerTile
            ? 3
            : isHorizontalEdge || isVerticalEdge
            ? 5
            : 8;
          expect(getNearbyTiles(board, position)).toHaveLength(expectedLength);
        }
      });
    });
  }
});
