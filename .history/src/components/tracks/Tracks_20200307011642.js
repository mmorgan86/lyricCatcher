import React, { Component } from "react";
import { Consumer } from "../../Context";
import Spinner from "../layout/Spinner";

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          const { track_list } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <div className="row">
                <Track />
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
