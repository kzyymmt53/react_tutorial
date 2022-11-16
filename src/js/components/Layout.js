import React from "react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "Test";
  }
  render() {
    return (
      <h1>It's {this.name}!</h1>
    );
  }
}
