import { useState } from "react";
import "./App.css";
import { RemainingFlagsCount } from "./components/FlaggedTilesCount";
import { LevelAndRestartButton } from "./components/LevelAndRestartButton";
import { Timer } from "./components/Timer";
import { Board } from "./game/components/Board";
import { createBoard } from "./game/createBoard";
import { getTouchingEmptyTiles } from "./game/getTouchingEmptyTiles";
import {
  IBoard,
  IBoardState,
  IGameLevels,
  IGameLevelTitle,
} from "./game/interfaces/IBoardState";

const levels: IGameLevels = {
  [IGameLevelTitle.Hard]: { size: [20, 25], mines: 80 },
};

const getInitialBoardState = (board: IBoard): IBoardState => ({
  gameOver: false,
  visibilityState: board.tiles.map(() => "hidden"),
});

// TODO: Add modal for attribution for the flag icon and the several other resources I'm going to need
// <div>Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <a target="_blank" href="undefined/icons/set/explosion">Explosion icon</a> icon by <a target="_blank" href="">Icons8</a>
function App() {
  const [level, setLevel] = useState<IGameLevelTitle>(IGameLevelTitle.Hard);
  const levelSpecs = levels[level];
  const boardSize = levelSpecs.size;

  const [board, setBoard] = useState<IBoard>({
    tiles: new Array(boardSize[0] * boardSize[1])
      .fill(0)
      .map(() => ({ isMine: false })),
    size: boardSize,
  });

  const [boardState, setBoardState] = useState<IBoardState>(
    getInitialBoardState(board)
  );

  const gameWon = board.tiles.every((t, i) =>
    t.isMine ? true : boardState.visibilityState[i] === "unveiled"
  );

  const gameStarted = boardState.visibilityState.some((v) => v === "unveiled");

  const flaggedTilesCount = boardState.visibilityState.reduce(
    (acc, curr) => (curr === "flagged" ? acc + 1 : acc),
    0
  );

  const numberOfFlagsLeft = levelSpecs.mines - flaggedTilesCount;

  return (
    <div className="App">
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <div
          style={{
            flexDirection: "column",
          }}
        >
          <div style={{ marginBottom: 8, justifyContent: "space-between" }}>
            <Timer
              status={
                gameStarted && !(boardState.gameOver || gameWon)
                  ? "running"
                  : "stopped"
              }
            />
            <LevelAndRestartButton
              currentLevel={level}
              levels={levels}
              onRestartClick={() => {
                setBoardState(getInitialBoardState(board));
              }}
            />
            <RemainingFlagsCount count={numberOfFlagsLeft} />
          </div>
          <Board
            board={board}
            state={boardState}
            gameWon={gameWon}
            onClick={(index) => {
              let maybeUpdatedBoard = board;

              if (!gameStarted) {
                maybeUpdatedBoard = createBoard(levelSpecs, index);
                setBoard(maybeUpdatedBoard);
              }

              const gameOver = maybeUpdatedBoard.tiles[index].isMine;

              const tilesToUnveil = gameOver
                ? [index]
                : [index].concat(
                    getTouchingEmptyTiles(maybeUpdatedBoard, index)
                  );

              setBoardState({
                gameOver,
                visibilityState: boardState.visibilityState.map((v, i) =>
                  tilesToUnveil.some((t) => t === i) && v !== "flagged"
                    ? "unveiled"
                    : v
                ),
              });
            }}
            onRightClick={(index) => {
              if (!gameStarted || gameWon || boardState.gameOver) {
                return;
              }

              setBoardState(({ gameOver }) => ({
                gameOver,
                visibilityState: boardState.visibilityState.map((v, i) => {
                  if (i !== index) {
                    return v;
                  }

                  return v === "flagged" ? "hidden" : "flagged";
                }),
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
