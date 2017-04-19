var express = require("express");
var mongoose = require("mongoose");
var port = 5000;
var bodyParser = require("body-parser");
var app = express();
var vanRoute = require("./routes/van-route");

mongoose.connect('mongodb://localhost/vans');

app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/vans", vanRoute)

app.listen(port, function(){
    console.log("Rocking and rolling")
});