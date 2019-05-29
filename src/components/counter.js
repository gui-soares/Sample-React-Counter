import React, { Component } from "react";

import plus from "../images/plus.png";
import minus from "../images/minus.png";
import reset from "../images/reload.png";

export class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  incrementCounter() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  decrementCounter() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  resetCounter() {
    this.setState(() => ({ counter: 0 }));
  }

  render() {
    return (
      <div className="main-container">
        <div className="counter-container">
          <h2>{this.state.counter}</h2>
        </div>
        <div className="controllers-container">
          <button className="increment" onClick={this.incrementCounter}>
            <img src={plus} alt="increment" />
          </button>
          <button className="reset" onClick={this.resetCounter}>
            <img src={reset} alt="reset" />
          </button>
          <button className="decrement" onClick={this.decrementCounter}>
            <img src={minus} alt="decrement" />
          </button>
        </div>
      </div>
    );
  }
}
