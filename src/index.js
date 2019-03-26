import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
//import Ca2 from "./items/ca2";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./items/Main";
import Form from "./items/Form";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
// var data = {
//   columns: ["Item ID", "Name", "Cost of item"]
// };
// ReactDOM.render(<Ca2 data={data} />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
