import "./App.css";
import { Board } from "./components/Board";

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
        <Board size={10} state={{}} />
      </div>
    </div>
  );
}

export default App;
