// Databse connection details
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/projectDirectory';
var dbObj;

// Connect to database
MongoClient.connect(url, function(err, db) {
    dbObj = db;
    setUpServer(); // start server
});

// Server settings
var http = require('http');
var port = 3000;

function setUpServer() {
	http.createServer(function(req, res) {
		
		res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
		let collection = dbObj.collection('projects');
	    
	    collection.find({}).toArray(function(err, projects) {
	    	res.write(JSON.stringify(projects));
	   		res.end();
	    });

	}).listen(port);    	
	console.log('http://localhost:3000');
}
