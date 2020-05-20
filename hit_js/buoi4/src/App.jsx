import React, { Component } from "react";
import "./App.css";
import images from "./images";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: images[3],
    };
  }

  changeImage = (id) => {
    this.setState({ show: images[id] });
  };

  render() {
    return (
      <div className="webpage">
        <div className="col">
          <div
            className="img"
            style={{ backgroundImage: `url(${images[0]})` }}
            onClick={() => this.changeImage(0)}
          ></div>
          <div
            className="img"
            style={{ backgroundImage: `url(${images[1]})` }}
            onClick={() => this.changeImage(1)}
          ></div>
          <div
            className="img"
            style={{ backgroundImage: `url(${images[2]})` }}
            onClick={() => this.changeImage(2)}
          ></div>
        </div>
        <div className="col">
          <div
            className="img"
            id="show"
            style={{ backgroundImage: `url(${this.state.show})` }}
          />
        </div>
        <div className="col">
          <div
            className="img"
            style={{ backgroundImage: `url(${images[4]})` }}
            onClick={() => this.changeImage(4)}
          ></div>
          <div
            className="img"
            style={{ backgroundImage: `url(${images[5]})` }}
            onClick={() => this.changeImage(5)}
          ></div>
          <div
            className="img"
            style={{ backgroundImage: `url(${images[6]})` }}
            onClick={() => this.changeImage(6)}
          ></div>
        </div>
      </div>
    );
  }
}
