import React, { Component } from "react";
import Form from "./items/Form";
import View from "./items/View";

class App extends React.Component {
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
        <br />
        <button
          type="button"
          className="btn btn-info  btn-lg"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Items
        </button>

        <div className="modal-dialog" role="document">
          {<Form />}
        </div>
        <div className="row">{<View />}</div>
      </div>
    );
  }
}

export default App;
