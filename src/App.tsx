import { useState } from "react";
import "./App.css";
import { Board } from "./game/components/Board";
import { createBoard } from "./game/createBoard";
import { getTouchingEmptyTiles } from "./game/getTouchingEmptyTiles";
import { IBoard, IBoardState } from "./game/interfaces/IBoardState";

// TODO: Add modal for attribution for the flag icon and the several other resources I'm going to need
// <div>Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <a target="_blank" href="undefined/icons/set/explosion">Explosion icon</a> icon by <a target="_blank" href="">Icons8</a>
function App() {
  const [boardSize, setBoardSize] = useState(10);

  const [board, setBoard] = useState<IBoard>({
    tiles: new Array(boardSize * boardSize)
      .fill(0)
      .map(() => ({ isMine: false })),
  });

  const [boardState, setBoardState] = useState<IBoardState>({
    gameOver: false,
    visibilityState: board.tiles.map(() => "hidden"),
  });

  const gameStarted = boardState.visibilityState.some((v) => v !== "hidden");

  return (
    <div className="App">
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Board
          board={board}
          state={boardState}
          onClick={(index) => {
            let maybeUpdatedBoard = board;

            if (!gameStarted) {
              maybeUpdatedBoard = createBoard(boardSize, 10, index);
              setBoard(maybeUpdatedBoard);
            }

            const gameOver = maybeUpdatedBoard.tiles[index].isMine;

            const tilesToUnveil = gameOver
              ? [index]
              : [index].concat(getTouchingEmptyTiles(maybeUpdatedBoard, index));

            setBoardState({
              gameOver,
              visibilityState: boardState.visibilityState.map((v, i) =>
                tilesToUnveil.some((t) => t === i) && v !== "flagged"
                  ? "unveiled"
                  : v
              ),
            });
          }}
          onRightClick={() => {}}
        />
      </div>
    </div>
  );
}

export default App;
