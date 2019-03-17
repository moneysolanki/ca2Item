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
app
  .post("/", function(req, res) {
    con.connect(function(error) {
      if (error) {
        console.log(error);
      } else {
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
      }
    });
  })
  .listen(8080);
