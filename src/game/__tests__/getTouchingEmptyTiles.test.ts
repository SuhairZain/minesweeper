import { getTouchingEmptyTiles } from "../getTouchingEmptyTiles";
import { IBoard } from "../interfaces/IBoardState";
import { formatBoard } from "./helpers";

const inputAndExpected: {
  input: { board: IBoard; position: number };
  expectedTouchingTiles: number[];
}[] = [
  {
    input: {
      board: {
        tiles: [
          { isMine: true },
          { isMine: false },
          { isMine: false },
          { isMine: false },
          { isMine: false },
          { isMine: false },
          { isMine: false },
          { isMine: false },
          { isMine: false },
        ],
        size: [3, 3],
      },
      position: 2,
    },
    expectedTouchingTiles: [1, 3, 4, 5, 6, 7, 8],
  },
  {
    input: {
      board: {
        tiles: [
          { isMine: true },
          { isMine: false },
          { isMine: true },
          { isMine: false },
          { isMine: false },
          { isMine: false },
          { isMine: false },
          { isMine: false },
          { isMine: false },
        ],
        size: [3, 3],
      },
      position: 8,
    },
    expectedTouchingTiles: [3, 4, 5, 6, 7],
  },
];

describe("WHEN given getTouchingEmptyTiles", () => {
  for (const { expectedTouchingTiles, input } of inputAndExpected) {
    const { position, board } = input;
    describe(`WHEN given ${formatBoard(board, [
      position,
    ])}\nand ${position}`, () => {
      it(`SHOULD be ${formatBoard(board, expectedTouchingTiles)}`, () => {
        expect(getTouchingEmptyTiles(board, position).sort()).toEqual(
          expectedTouchingTiles
        );
      });
    });
  }
});
