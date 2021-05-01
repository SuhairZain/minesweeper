import { createBoard } from "../createBoard";
import { IBoard } from "../interfaces/IBoardState";

const createBoardParams: {
  size: number;
  mines: number;
  initialIndex: number;
}[] = [
  { size: 10, mines: 10, initialIndex: 0 },
  { size: 10, mines: 99, initialIndex: 0 },
  { size: 2, mines: 3, initialIndex: 0 },
  { size: 3, mines: 8, initialIndex: 0 },
];

describe("WHEN testing createBoard", () => {
  for (const { initialIndex, mines, size } of createBoardParams) {
    describe(`WHEN creating a board with size ${size}, mines ${mines} and initial index ${initialIndex}`, () => {
      let board: IBoard;

      beforeAll(() => {
        board = createBoard(size, mines, initialIndex);
      });

      it("SHOULD create a board of the correct size", () => {
        expect(board.tiles).toHaveLength(size * size);
      });

      it("SHOULD NOT have a mine at the initial index", () => {
        expect(board.tiles[initialIndex].isMine).toBe(false);
      });

      it("SHOULD have the correct number of mines", () => {
        expect(board.tiles.filter((t) => t.isMine)).toHaveLength(mines);
      });
    });
  }
});
