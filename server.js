var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app= express(); 

//app.use('/api', router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'css')));
// app.set('/css', __dirname + '/css');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/school1', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/school2', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(8085,function(){
	console.log("server listening: 8085");
});