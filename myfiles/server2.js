var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host : "localhost",
  user : "user",
  password : "pass",
  database : "nodedb"
  });


app.post('/api/addassesment', function(req,res) {
  con.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    var sql = "INSERT INTO assesment (name,value) VALUES ('ANDROID VERSION','7.1.1')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(" record inserted ");
    });
  });

});

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
})

