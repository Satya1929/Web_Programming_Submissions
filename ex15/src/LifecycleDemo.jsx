import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log("LifecycleDemo: constructor");
  }

  componentDidMount() {
    console.log("LifecycleDemo: componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifecycleDemo: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("LifecycleDemo: componentWillUnmount");
  }

  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  render() {
    console.log("LifecycleDemo: render");
    return (
      <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
        <h2>Lifecycle Demo</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;