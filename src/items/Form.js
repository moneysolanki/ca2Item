import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name, cost: this.props.cost, modal: false };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
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
    this.props.handleFormChange(this.state);
  }

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Item
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div
                className="modal-body"
                style={{
                  margin: "20px 20px",
                  marginLeft: "70px"
                }}
              >
                <div className="row">
                  <p style={{ marginRight: "20px" }}>Name : </p>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <p style={{ marginRight: "28px" }}>Cost : </p>
                  <div>
                    <input
                      type="number"
                      name="cost"
                      value={this.state.cost}
                      onChange={this.handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <br />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.handleClick}
                >
                  Add Item
                </button>
                {/* <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.toggle}
                >
                  Close
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
