import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" my-5>
      <h1>Counter App <br /> Using React Hooks</h1>

      <h1 style={{cursor: "pointer"}} className="count" onClick={() => setCount(0)} > {count} </h1>

      <div>
      <button disabled={count === 0} class="btn btn-secondary" onClick={() => setCount(count - 1)}>
      Decrement
      </button>
      <button disabled={count === 0} class="btn btn-warning" onClick={() => setCount(0)}>
      Reset
      </button>
      <button class="btn btn-success" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      </div>
    </div>
  );
}

export default App;
