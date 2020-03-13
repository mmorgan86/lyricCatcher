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
          if(track_list === undefined || track_list.length <) {
            
          } else {

          }
        }}
      </Consumer>
    );
  }
}

export default Track;
