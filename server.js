let express = require('express');
let app     = express();

app.get("/", function(req, res){
  res.render("home.ejs")
});

app.get("/fallinlovewith/:thing", function(req, res){
  let thing = req.params.thing;
  res.render("love.ejs");
});



app.listen(3000, function(){
  console.log('server is listening');
})
