import { IBoard } from "../interfaces/IBoardState";
import { getNearbyMines } from "../getNearbyMines";
import { formatBoard } from "./helpers";

const inputAndExpected: {
  input: { board: IBoard; position: number };
  expectedMinesNearby: number;
}[] = [
  {
    input: {
      board: {
        tiles: [
          { isMine: false },
          { isMine: false },
          { isMine: false },
          { isMine: false },
        ],
      },
      position: 0,
    },
    expectedMinesNearby: 0,
  },
  {
    input: {
      board: {
        tiles: [
          { isMine: false },
          { isMine: true },
          { isMine: false },
          { isMine: false },
        ],
      },
      position: 0,
    },
    expectedMinesNearby: 1,
  },
  {
    input: {
      board: {
        tiles: [
          { isMine: true },
          { isMine: true },
          { isMine: true },
          { isMine: true },
        ],
      },
      position: 0,
    },
    expectedMinesNearby: 3,
  },
];

describe("WHEN given getNearbyMines", () => {
  for (const { expectedMinesNearby, input } of inputAndExpected) {
    const { position, board } = input;
    describe(`WHEN given ${formatBoard(board)}\nand ${position}`, () => {
      it(`SHOULD be ${expectedMinesNearby}`, () => {
        expect(getNearbyMines(board, position)).toBe(expectedMinesNearby);
      });
    });
  }
});
