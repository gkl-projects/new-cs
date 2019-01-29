var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host : "localhost",
  user : "user",
  password : "pass",
  database : "nodedb"
  });


app.get('/api/getassesment/:id', function(req,res) {
  con.connect(function(err) {
    if (err) throw err;
    console.log("connected");
    var sql = "SELECT * FROM assesment WHERE id=id";
    con.query(sql, function (err, result,fields) {
      if (err) throw err;
      console.log(result);
    });
  });

});

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
})
  
