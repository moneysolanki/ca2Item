import React, { Component } from "react";
import Form from "./Form";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className="container">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Items
        </button>

        <div className="modal-dialog" role="document">
          {<Form />}
        </div>
      </div>
    );
  }
}

export default Main;
