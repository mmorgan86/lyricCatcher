import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
    state = {
        
    }
  render() {
    return <Context.Provider>{this.props.children}</Context.Provider>;
  }
}
