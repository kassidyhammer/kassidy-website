let express = require('express');

let server = express();
let PORT = process.env.PORT || 3000;

server.use(express.static("public"));
server.get("/", function(req, res){
    res.send("hello world from Kassidy's website.");
});

server.listen(PORT, function(req, res){
    console.log("listening on port 3000");
});