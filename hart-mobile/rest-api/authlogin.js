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

app.post('/login', function(req,res) {
  var email = req.body.email;
  var password = req.body.password;
  con.query('SELECT * FROM users WHERE email = ?',[email], function (err, result) {
    if (err) throw err;
    else{
      console.log('The solution is:',result);
      if(result.length >0){
        if(result[0].password==password){
          res.send({
            "code":200,
            "success":"login successfull"
          });
        }
        else{
          res.send({
            "code":204,
            "success":"email and password does not match"
          });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"email doesn't exists"
        });
      }
    }
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port
})


























