import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./styles/main/main.scss";
import IntroPage from "./pages/IntroPage/Intro";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
