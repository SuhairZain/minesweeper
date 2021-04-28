import "./App.css";
import { Board } from "./components/Board";
import { IBoardState, ITileState } from "./interfaces/IBoardState";

const boardSize = 10;

const tiles: ITileState[] = [];
const boardState: IBoardState = { tiles, gameOver: false };
for (let i = 0; i < boardSize * boardSize; ++i) {
  tiles.push({
    visibility: i % 3 === 0 ? "unveiled" : "obscure",
    isMine: false,
  });
}

tiles[3].isMine = true;
tiles[4].visibility = "flagged";

// TODO: Add modal for attribution for the flag icon and the several other resources I'm going to need
// <div>Icons made by <a href="https://www.flaticon.com/authors/alfredo-hernandez" title="Alfredo Hernandez">Alfredo Hernandez</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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
        <Board size={boardSize} state={boardState} />
      </div>
    </div>
  );
}

export default App;
