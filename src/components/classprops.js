import { Component } from "react";

class Classprops extends Component {
  render() {
    return (
      <div>
        classprops
        <br />
        {this.props.message}
      </div>
    );
  }
}

export default Classprops;
