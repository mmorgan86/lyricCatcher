import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Incex } from "./components/layout/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={IUndex} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
