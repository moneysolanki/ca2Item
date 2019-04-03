import React, { Component } from "react";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    };
    //this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://localhost:8080/");
    xmlhttp.send();
    xmlhttp.onload = function() {
      let serverData = xmlhttp.responseText;
      console.log(serverData);
      serverData = JSON.parse(serverData);
      this.setState({ items: serverData });
      this.props.handleViewChange(serverData);
    }.bind(this);
  }

  render() {
    let items = this.props.items;
    return (
      <div className="container">
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr className="table-active">
                <th>Sr No.</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {items.map(function(items, index) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{items.name}</td>
                    <td>{items.cost}</td>
                    <td>
                      <button className="btn btn-info">Delete</button>{" "}
                      <button className="btn btn-info">Update</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default View;
