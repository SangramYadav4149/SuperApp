import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/MainCategory/MainCategory";
import MainBrowse from "./Pages/Browse/MainBrowse";
import Browse2 from "./Pages/Browse2/Browse2";
import MainCategory from "./Pages/MainCategory/MainCategory";
import Movies from "./Components/Moves/Movies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Category" element={<MainCategory />} />
        <Route path="/Browse" element={<MainBrowse />} />
        <Route path="/Browse2" element={<Browse2 />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
