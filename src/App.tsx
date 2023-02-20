import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./styles/main/main.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
