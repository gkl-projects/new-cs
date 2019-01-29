var http = require('http');
var express = require('express');
var app = express();
var mysql = require('mysql');

const bodyParser = require("body-parser");

var con = mysql.createConnection({
  host : "localhost",
  user : "user",
  password : "pass",
  database : "nodedb"
  });

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

con.connect(function(err) {
    if (err) throw err;
    console.log("connected");
});

app.post('/api/addassesment', function(req,res) {
  //var sql = "INSERT INTO assesment (name,value) VALUES (?,?)";
  var name = req.body.name;
  var value = req.body.value;    
  con.query('INSERT INTO assesment(name,value) values(?,?)',[name,value], function (err, result) {
    if (err) throw err;
    console.log(" record inserted ");
    res.send("success");
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
})
  











