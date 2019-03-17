import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      cost: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
  }
  handleClick() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "http://localhost:8080");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(this.state));
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container" width="50%">
          <div className="row">
            <h1>Items</h1>
          </div>
          <div className="row">
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <br />
          <div className="row">
            <p>Cost</p>
            <input
              type="number"
              name="cost"
              value={this.state.cost}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <br />
          <div className="row">
            <button onClick={this.handleClick} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
