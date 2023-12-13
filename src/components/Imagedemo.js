import { Component } from "react";
import image1 from "../images/first.jpg";
import image2 from "../images/second.jpg";

class Imagedemo extends Component {
  constructor() {
    super();
    this.state = {
      img1: image1,
      img2: image2,

      currentimg: image1,
    };

    this.toggleimage = this.toggleimage.bind(this);
  }

  toggleimage() {
    this.setState((prevState) => ({
      currentimg:
        prevState.currentimg === prevState.img1
          ? prevState.img2
          : prevState.img1,
    }));
  }

  render() {
    return (
      <div>
        <img src={this.state.currentimg} alt="First Image" />
        <button onClick={this.toggleimage}>Toggle Image</button>
      </div>
    );
  }
}

export default Imagedemo;
