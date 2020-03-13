import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks"
  };

  componentDidMount() {
    axios
      .get(
        `https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=10&page_size=5&country=us&f_has_lyrics=1&APIKEY=$`
      )
      .then(res => console.log(res.data))
      .cath(err => console.log(err));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
