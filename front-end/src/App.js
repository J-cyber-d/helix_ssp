import React from "react";
import TilePage from "./pages/tile";
import AddItem from "./pages/add";
import EditItem from "./pages/edit";
import "./app.css";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TilePage />} />
        <Route path="/addtile" element={<AddItem />} />
        <Route path="/edittile" element={<EditItem />} />
      </Routes>
    </div>
  );
}
export default App;
