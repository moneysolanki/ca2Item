import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class AlertAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return alert(
      <form class="alert alert-light" role="alert">
        <h1>Add Item</h1>
        <input placeholder="Name" />
        <br />
        <br />
        <input placeholder="Cost of Item" />
        <br />
        <button class="btn btn-success">Add</button>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={this.onDismiss}
        />
        <span aria-hidden="true">&times;</span>
      </form>
    );
  }
}

export default AlertAdd;
