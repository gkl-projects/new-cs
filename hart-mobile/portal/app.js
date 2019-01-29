const express = require('express');
const app = express()

app.get('/',function(req,res,next) {
  //res.render('index.ejs', {
    //layout: false,
    //locals: {
      //example: "hello world!"
    //}
  //});
  var data={example:"Hello World"}
  res.render('in.ejs',data);
});

app.listen(3500,function(){
  console.log('app listening on port 3500')

})

