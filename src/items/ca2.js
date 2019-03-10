import React, { Component } from "react";

class Ca2 extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], columns: this.props.data.columns };

    this.tableHeaders = this.tableHeaders.bind(this);
    this.Add = this.Add.bind(this);
  }
  tableHeaders() {
    var tableHeaders = (
      <thead>
        <tr>
          {this.state.columns.map(function(column) {
            return <th>{column}</th>;
          })}
        </tr>
      </thead>
    );
    return tableHeaders;
  }

  Add() {
    var value = 3;
    var array = [];
    for (var i = 0; i < value; i++) {
      array.push(i);
    }
    var input = array.map(index => <input key={index} />);
    return input;
    // var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    // var product = {
    //   id: id,
    //   name: "",
    //   cost: 0
    // };
    // this.state.products.push(product);
    // this.setState(this.state.products);
  }
  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          onClick={this.Add()}
          className="btn btn-success pull-right"
        >
          Add
        </button>
        <table className="table table-bordered">
          {this.tableHeaders()}

          <tbody>{this.state.products}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Ca2;
