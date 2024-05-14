import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" my-5>
      <h1>Counter App</h1>

      <h1 className="count"> {count} </h1>

      <div>
        <button class="btn btn-success" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button disabled={count === 0} class="btn btn-secondary" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
        <button disabled={count === 0} class="btn btn-warning" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
