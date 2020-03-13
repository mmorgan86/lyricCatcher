import React, { Component } from "react";
import { Consumer } from "../../Context";

class Track extends Component {
  render() {
    return (
      <Consumer>
      {value => {
        console.log(value);
        return 
      }}
      </Consumer>
    );
  }
}

export default Track;
