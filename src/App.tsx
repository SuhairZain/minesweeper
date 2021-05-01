import "./App.css";
import { Board } from "./components/Board";
import {
  IBoard,
  IBoardState,
  ITile,
  ITileVisibilityState,
} from "./interfaces/IBoardState";

const boardSize = 10;

const tiles: ITile[] = [];
const board: IBoard = { tiles };
const visibilityState: ITileVisibilityState[] = [];
const boardState: IBoardState = { board, visibilityState, gameOver: true };
for (let i = 0; i < boardSize * boardSize; ++i) {
  tiles.push({
    isMine: false,
  });

  visibilityState.push(i % 3 === 0 ? "unveiled" : "hidden");
}

// tiles[3].visibility = "obscure";
tiles[3].isMine = true;
visibilityState[4] = "flagged";

// TODO: Add modal for attribution for the flag icon and the several other resources I'm going to need
// <div>Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <a target="_blank" href="undefined/icons/set/explosion">Explosion icon</a> icon by <a target="_blank" href="">Icons8</a>
function App() {
  return (
    <div className="App">
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Board state={boardState} />
      </div>
    </div>
  );
}

export default App;
