import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Favourite from "./pages/favourite/Favourite";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-grey-600 text-lg ">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/Favourite" element={
            <Favourite />
          } />
          <Route path="/recipe-item/:id" element={
            <Details />
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
