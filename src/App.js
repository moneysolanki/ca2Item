import React, { Component } from "react";
import Form from "./items/Form";
import View from "./items/View";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      cost: "",
      name: "",
      items: []
    };

    this.toggle = this.toggle.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleViewChange = this.handleViewChange.bind(this);
    //this.handleDelete = this.handleDelete.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleFormChange(data) {
    console.log("this is form");
    console.log(data);
    let item = {
      name: data.name,
      cost: data.cost
    };
    let items_array = [...this.state.items];
    items_array.push(item);
    this.setState({ items: items_array });
  }
  handleViewChange(data) {
    console.log("this is view");
    this.setState({ items: data });
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
          {
            <Form
              name={this.state.name}
              cost={this.state.cost}
              handleFormChange={this.handleFormChange}
            />
          }
        </div>
        <div className="row">
          {
            <View
              items={this.state.items}
              handleViewChange={this.handleViewChange}
            />
          }
        </div>
      </div>
    );
  }
}

export default App;
