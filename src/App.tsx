import { useReducer } from "react";
import "./App.css";
import { RemainingFlagsCount } from "./components/FlaggedTilesCount";
import { LevelAndRestartButton } from "./components/LevelAndRestartButton";
import { Timer } from "./components/Timer";
import { Board } from "./game/components/Board";
import { createBoard } from "./game/createBoard";
import { getTouchingEmptyTiles } from "./game/getTouchingEmptyTiles";
import { getBoardOfSize } from "./game/helpers";
import {
  IBoard,
  IBoardState,
  IGameLevels,
  IGameLevelTitle,
} from "./game/interfaces/IBoardState";

const levels: IGameLevels = {
  [IGameLevelTitle.Easy]: { size: [10, 10], mines: 10 },
  [IGameLevelTitle.Hard]: { size: [20, 25], mines: 80 },
};

const getInitialBoardState = (board: IBoard): IBoardState => ({
  gameOver: false,
  visibilityState: board.tiles.map(() => "hidden"),
});

type IAction =
  | { type: "changeLevel"; payload: { level: IGameLevelTitle } }
  | { type: "primaryClick"; payload: { index: number } }
  | { type: "secondaryClick"; payload: { index: number } };

const reducer = (state: IAppState, action: IAction): IAppState => {
  switch (action.type) {
    case "changeLevel": {
      return getInitialState(action.payload.level);
    }
    case "primaryClick": {
      const { boardState, level } = state;
      const { index } = action.payload;

      const gameStarted = boardState.visibilityState.some(
        (v) => v === "unveiled"
      );

      const board = gameStarted
        ? state.board
        : createBoard(levels[level], index);

      const gameOver = board.tiles[index].isMine;

      const tilesToUnveil = gameOver
        ? [index]
        : [index].concat(getTouchingEmptyTiles(board, index));

      return {
        ...state,
        board,
        boardState: {
          gameOver,
          visibilityState: boardState.visibilityState.map((v, i) =>
            tilesToUnveil.some((t) => t === i) && v !== "flagged"
              ? "unveiled"
              : v
          ),
        },
      };
    }
    case "secondaryClick": {
      const { board, boardState } = state;
      const { index } = action.payload;

      const gameWon = board.tiles.every((t, i) =>
        t.isMine ? true : boardState.visibilityState[i] === "unveiled"
      );

      const gameStarted = boardState.visibilityState.some(
        (v) => v === "unveiled"
      );

      if (!gameStarted || gameWon || boardState.gameOver) {
        return state;
      }

      return {
        ...state,
        boardState: {
          ...boardState,
          visibilityState: boardState.visibilityState.map((v, i) => {
            if (i !== index) {
              return v;
            }

            return v === "flagged" ? "hidden" : "flagged";
          }),
        },
      };
    }
  }
};

interface IAppState {
  board: IBoard;
  boardState: IBoardState;
  level: IGameLevelTitle;
}

const getInitialState = (level: IGameLevelTitle): IAppState => {
  const levelSpecs = levels[level];
  const boardSize = levelSpecs.size;

  const board = getBoardOfSize(boardSize);
  const boardState = getInitialBoardState(board);

  return {
    level,
    board,
    boardState,
  };
};

// TODO: Add modal for attribution for the flag icon and the several other resources I'm going to need
// <div>Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <a target="_blank" href="undefined/icons/set/explosion">Explosion icon</a> icon by <a target="_blank" href="">Icons8</a>
function App() {
  const [state, dispatch] = useReducer(
    reducer,
    getInitialState(IGameLevelTitle.Easy)
  );

  const { board, boardState, level } = state;
  const { mines } = levels[level];

  const gameWon = board.tiles.every((t, i) =>
    t.isMine ? true : boardState.visibilityState[i] === "unveiled"
  );

  const gameStarted = boardState.visibilityState.some((v) => v === "unveiled");

  const flaggedTilesCount = boardState.visibilityState.reduce(
    (acc, curr) => (curr === "flagged" ? acc + 1 : acc),
    0
  );

  const numberOfFlagsLeft = mines - flaggedTilesCount;

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
                !gameStarted
                  ? "reset"
                  : boardState.gameOver || gameWon
                  ? "stopped"
                  : "running"
              }
            />
            <LevelAndRestartButton
              currentLevel={level}
              levels={levels}
              onRestartClick={() => {
                dispatch({ type: "changeLevel", payload: { level } });
              }}
              onLevelChange={(level) => {
                dispatch({ type: "changeLevel", payload: { level } });
              }}
            />
            <RemainingFlagsCount count={numberOfFlagsLeft} />
          </div>
          <Board
            board={board}
            state={boardState}
            gameWon={gameWon}
            onClick={(index) => {
              dispatch({ type: "primaryClick", payload: { index } });
            }}
            onRightClick={(index) => {
              dispatch({ type: "secondaryClick", payload: { index } });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
