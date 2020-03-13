import React, { Component } from "react";
import { Consumer } from "../../Context";
import Spinner from '../layout/Spinner';

class Track extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          const { track_list } = value;
          if() {

          } else {

          }
        }}
      </Consumer>
    );
  }
}

export default Track;
