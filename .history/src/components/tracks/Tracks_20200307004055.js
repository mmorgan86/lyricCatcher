import React, { Component } from "react";
import { Consumer } from "../../Context";

class Track extends Component {
  render() {
    return (
      <Consumer>
      {value => {
        console.log(value)
      }}
      </Consumer>
    );
  }
}

export default Track;
