var express = require('express');
var  app = express();
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

var mydata={};

app.use(express.static('public'));
app.set('view engine','ejs')

app.get('/',function(req,res) {
  var data;
  con.query('SELECT header_name,header_value FROM content', function (err, result) {
    if (err) throw err;
    for(var i=0;i<result.length;i++)
    {
      //console.log(result[i].header_name);
      mydata[result[i].header_name]=result[i].header_value;
      //mydata = {title: 'Admin | Home :: get',logo: 'logo' }
    }
      
  });
  //console.log(mydata);
  res.render('index',mydata);
})

app.listen(3000,function(){
  console.log('app listening on port 3000')

})


