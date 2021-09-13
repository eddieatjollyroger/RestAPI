var express = require('express'); 
var app = express();
var fs = require('fs');

app.post('/properties', function(req, res){
    fs.readFile(__dirname + "/" + "properties.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        data["user5"] = user["user5"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get('/properties', function(req, res){
    fs.readFile(__dirname + "/" + "properties.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); 
    });
})



var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("small REST API listening at http://%s:%s", host, port)
})