import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../Context";

class Search extends Component {
  state = {
    trackTitle: ""
  };
  render() {
    return (
      <Consumer>
        {value => {
            return (
                <div className="card card-body mb-4 p-4">
                    h
                </div>
            );
        }}
      </Consumer>
    );
  }
}

export default Search;
