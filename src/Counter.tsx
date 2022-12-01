import React from "react";

interface State {
  counter: number;
  seed: number;
  error: string;
}
interface Props {
  seedValue: number;
}
const ErrorBoundary = () => {
  return <div>i will give an error {props.value}</div>;
};

export default class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
      error: ""
    };
  }

  handleClick = () => {
    // console.log("handle clicked");
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });
  };
  componentWillUnmount() {
    console.log("component Will Unmounted");
  }
  static getDerivedStateFromProps() {
    console.log("component will recive from props");
  }
  render() {
    const { counter, error } = this.state;
    // mandatory method write when we are creating class component;
    console.log("In render________");
    if (error) {
      return <div> i have and error {error}</div>;
    }

    return (
      <>
        <button onClick={this.handleClick}>Increment counter</button>
        <div>Counter is basic {counter}</div>
        <ErrorBoundary />
      </>
    );
  }
  componentDidCatch(error, info) {
    console.log("componentdid catch", error, info);

    this.setState({
      error: error.message
    });
  }
}
