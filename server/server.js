var http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
var qs = require('querystring');
app.get('/login', (req, res) => {
    debugger;
    console.log(req);
    res.writeHead(200, {"Content-Type": "application/json"});
    var otherArray = ["username", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({
        anObject: otherObject,
        anArray: otherArray,
        another: "item"
    });
    res.end(json);
});
http.createServer(app).listen(9999);