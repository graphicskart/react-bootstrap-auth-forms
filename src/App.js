import React, { Component } from "react";
import "./App.css";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default App;
