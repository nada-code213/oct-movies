import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchAppBar from "./components/appBar";

import TvSeries from "./pages/tv-series";
import Movies from "./pages/movies";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="/tv-series" element={<TvSeries />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
