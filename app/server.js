// Dependencies
// series of npm packages that we will use to give our server useful functionality
// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var mysql = require("mysql");
// invoke express
// this tells node we are creating an express server
var app = express();

var PORT = 8080;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "friends_db"
});

connection.connect();

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// app.use(bodyParser.json()) basically tells the system that you want json to be used. bodyParser.urlencoded({extended: ...}) basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("app is listening on: " + PORT);
});
