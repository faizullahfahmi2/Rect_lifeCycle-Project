import React from "react";
import "./styles.css";
import Counter from "./Counter";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mount: true,
      seedValue: 40
    };
  }
  mountComponent = () => {
    this.setState({
      mount: true
    });
  };
  generateSeed = () => {
    this.setState({
      seedValue: parseInt(Math.random() * 100)
    });
    console.log("seed called");
  };
  unMountComponent = () => {
    this.setState({
      mount: false
    });
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button
          style={{ margin: "30px", color: "red" }}
          onClick={this.mountComponent}
          disabled={this.state.mount}
        >
          Mount
        </button>
        <button
          style={{ margin: "30px" }}
          onClick={this.unMountComponent}
          disabled={this.state.unMount}
        >
          unMount
        </button>
        <button style={{ margin: "30px" }} onClick={this.generateSeed}>
          GenerateSeed
        </button>
        <br />
        {this.state.mount ? <Counter seedValue={this.state.seedValue} /> : ""}
      </div>
    );
  }
}
