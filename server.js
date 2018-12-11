let express = require('express');
let app     = express();

app.get("/", function(req, res){
  res.render("home.ejs")
});

app.get("/fallinlovewith/:thing", function(req, res){
  let thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});
app.get("/posts", function(req, res){
  var posts = [
    {title: "post 1", aurthor: "Susy"},
    {title: "my cool dog", aurthor: "Stephen"},
    {title: "can you believe this doggy", aurthor: "Charlie"},
  ];
  res.render("posts.ejs", {posts: posts})
})


app.listen(3000, function(){
  console.log('server is listening');
})
