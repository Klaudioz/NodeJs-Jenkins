var express = require('express');
var app = express();

app.get('/',function(req,res) {
	res.send("Continuous Integration and deployment with Jenkins and Node.js - Test Final 0.6");
	res.end("Proyect in development droplet");
});

app.listen(4000);
