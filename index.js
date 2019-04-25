let express = require('express');

let server = express();

server.use(express.static("public"));
server.get("/", function(req, res){
    res.send("hello world");
});

server.listen(3000, function(req, res){
    console.log("listening on port 3000");
});