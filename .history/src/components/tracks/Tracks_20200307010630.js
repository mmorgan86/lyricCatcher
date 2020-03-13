import React, { Component } from "react";
import { Consumer } from "../../Context";
import Spinner from '../layout/Spinner';

class Track extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          if() {
            
          }
        }}
      </Consumer>
    );
  }
}

export default Track;
