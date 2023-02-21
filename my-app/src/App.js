import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
const App = () => {
  return (
    <div className="App">
      <div id="bg"></div>
      <div id="container">
        <Nav />
        <Route path="/" element={<Home />} />
      </div>
    </div>
  );
};

export default App;
