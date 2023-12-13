import { Component } from "react";

class Newclass extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
      name: "Sam",
    };
  }

  increasecount() {
    console.log(this.state.count);
    this.setState((prev) => ({ count: prev.count + 1 }));
    this.setState({ name: "Andy" });
  }

  increase5() {
    this.increasecount();
    this.increasecount();
    this.increasecount();
    this.increasecount();
    this.increasecount();
  }

  render() {
    return (
      <div>
        {this.state.count}
        {this.state.name}
        <button onClick={() => this.increase5()}>Increase</button>
      </div>
    );
  }
}

export default Newclass;
