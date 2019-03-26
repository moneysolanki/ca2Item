var express = require("express");
var app = express();
var bodyparse = require("body-parser");
var mysql = require("mysql");

app.use(bodyparse.json());
var con_object = {
  host: "localhost",
  user: "root",
  password: "",
  database: "item"
};
var con = mysql.createConnection(con_object);
con.connect(function(error) {
  if (error) {
    console.log(error);
  }
});

app.post("/", function(req, res) {
  var sql =
    'INSERT INTO item values ( "NULL","' +
    req.body.name +
    '", "' +
    req.body.cost +
    '")';
  console.log("successfully connected to the database");
  con.query(sql, function(error, data, feild) {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.parse(JSON.stringify(data)));
    }
  });
});

app.get("/", function(req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  var sql = "SELECT * from item";
  con.query(sql, function(error, data, feild) {
    if (error) {
      console.log(error);
    } else {
      data = JSON.stringify(data);
      res.write(data);
      res.end();
    }
  });
});

app.listen(8080);
