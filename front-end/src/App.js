import React from "react";
import TilePage from "./pages/tile";
import AddItem from "./pages/add";
import "./app.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<TilePage />} />
    <Route path="/addtile" element={<AddItem />} />
    </Routes>
    </div>
  );
}
export default App;
