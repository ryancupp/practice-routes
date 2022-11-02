import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Color from "./components/Color";
import WordNum from "./components/WordNum";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:thing" element={<WordNum/>}/>
        <Route path="/:word/:wordcolor/:bgcolor" element={<Color/>}/>
      </Routes>
    </div>
  );
}

export default App;
