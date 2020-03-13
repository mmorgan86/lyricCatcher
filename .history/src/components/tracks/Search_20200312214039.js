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
            <div>
                hi
            </div>
        </Consumer>
    )
  }
}

export default Search;
