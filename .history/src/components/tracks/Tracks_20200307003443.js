import React, { Component } from "react";
import { Consumer } from "../../context";

class Track extends Component {
  render() {
    return (
      <Consumer>
        <h1>hi</h1>
      </Consumer>
    );
  }
}

export default Track;
