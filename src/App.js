import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/MainCategory/MainCategory";
import Info from "./Components/Browse/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
