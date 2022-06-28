//jshint esversion: 6

const express = require('express');
const app = express();

app.get("/", function(request, response) {
    response.send("<h1>Hello World</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: <a href='mailto:akshaj.murhekar@gmail.com'>akshaj.murhekar@gmail.com</a>");
});

app.get("/about", function(req, res){
    res.send("About me: <a href='https://www.linkedin.com/in/akshaj-murhekar'>Akshaj Murhekar</a>");
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});