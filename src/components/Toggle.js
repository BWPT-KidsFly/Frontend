import React, { Component } from "react";
import TripForm from './TripForm';

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div className="formBox">
        <button className="createBtn" onClick={this.toggle}>
          New Trip
        </button>
        {this.state.on && <TripForm />}
      </div>
    );
  }
}