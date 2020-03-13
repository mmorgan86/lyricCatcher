import React from "react";
import { BrowserRouter as Router, Route, Switch}
import "./App.css";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
