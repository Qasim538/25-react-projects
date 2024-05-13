import "./App.css";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <div className="App">
      <Carousel url={"https://picsum.photos/v2/list"} page = {'1'} limit={"10"} />
    </div>
  );
}

export default App;
