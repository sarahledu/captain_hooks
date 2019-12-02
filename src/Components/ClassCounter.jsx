import React, { Component } from "react";
import Button from "./Button";
import "../styles/counter.css";

class ClassCounter extends Component {
  state = {
    counter: 0
  };

  handleIncrement = e => this.setState(state => state.counter++);
  handleDecrement = e => this.setState(state => state.counter--);

  componentDidMount() {
    document.title = "Hello counter is " + this.state.counter;
  }

  componentDidUpdate() {
    document.title = "Hello counter is " + this.state.counter;
  }

  componentWillUnmount() {
    document.title = "Class counter was killed";
  }
  
  render() {

    return (
      <aside className="counter">
        <h1 className="counter-title">Class Counter</h1>
        <h3 className="counter-description">
          Counter value {this.state.counter}
        </h3>
        <div className="buttons">
          <Button handleClick={this.handleIncrement} sign="plus" isSuccess isFontAwesome/>
          <Button handleClick={this.handleDecrement} sign="minus" isFontAwesome />
        </div>
      </aside>
    );
  }
}

export default ClassCounter;
