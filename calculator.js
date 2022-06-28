//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res) {
    var height = Number(req.body.num1);
    var weight = Number(req.body.num2);
    
    //BMI = weight / (height * height)
    var bmi = weight / (height * height);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000.'); 
});