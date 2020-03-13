import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [
            {
               track: { track_name: 'abc'} 
            }
        ],

    }
  render() {
    return <Context.Provider>{this.props.children}</Context.Provider>;
  }
}
