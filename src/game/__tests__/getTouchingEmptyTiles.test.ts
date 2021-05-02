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
      },
      position: 2,
    },
    expectedTouchingTiles: [1, 3, 4, 5, 6, 7, 8],
  },
];

describe("WHEN given getTouchingEmptyTiles", () => {
  for (const { expectedTouchingTiles, input } of inputAndExpected) {
    const { position, board } = input;
    describe(`WHEN given ${formatBoard(board)}\nand ${position}`, () => {
      it(`SHOULD be ${expectedTouchingTiles}`, () => {
        expect(getTouchingEmptyTiles(board, position).sort()).toEqual(
          expectedTouchingTiles
        );
      });
    });
  }
});
