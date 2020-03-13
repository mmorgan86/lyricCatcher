import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        
      </React.Fragment>
    </Router>
  );
}

export default App;
