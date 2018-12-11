let express = require('express');
let app     = express();

// this is how we get our css to the public
app.use(express.static("public"));
// this tells express to expect ejs files
// key in drying the code
app.set("view engine", "ejs")

app.get("/", function(req, res){
  res.render("home")
});

app.get("/fallinlovewith/:thing", function(req, res){
  let thing = req.params.thing;
  res.render("love", {thingVar: thing});
});
app.get("/posts", function(req, res){
  var posts = [
    {title: "post 1", aurthor: "Susy"},
    {title: "my cool dog", aurthor: "Stephen"},
    {title: "can you believe this doggy", aurthor: "Charlie"},
  ];
  res.render("posts", {posts: posts})
})


app.listen(3000, function(){
  console.log('server is listening');
})
