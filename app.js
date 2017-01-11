var express = require('express');
var app = express();

app.get('/',function(req,res) {
	res.send("Continuous Integration and deployment with Jenkins and Node.js");
	res.send("1. Testing Github and Jenkins talking to each other");
	res.send("2. Installing npm in DigitalOcean droplet - console output Jenkins: npm: not found ");
});

app.listen(4000);
