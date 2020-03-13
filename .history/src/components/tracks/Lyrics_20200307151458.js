import React, { Component } from "react";
import axios from 'axios'
class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };
  render() {
    return (
      <div>
        <h1>Lyrics</h1>
      </div>
    );
  }
}

export default Lyrics;
