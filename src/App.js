import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/MainCategory/MainCategory";
import News from "./Components/Browse/News";
import MainBrowse from "./Pages/Browse/MainBrowse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainBrowse />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
