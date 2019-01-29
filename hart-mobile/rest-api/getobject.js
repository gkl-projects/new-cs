var express = require('express');
var app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
  host : "localhost",
  user : "user",
  password : "pass",
  database : "nodedb"
  });

con.connect(function(err) {
  if (err) throw err;
  console.log("connected");
});

app.get('/api/getassesment/:id', function(req,res) {
  var id = req.params.id;
  con.query('SELECT * FROM assesment WHERE id =?',[id], function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send('success');
  });
});



var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
})
  
  


