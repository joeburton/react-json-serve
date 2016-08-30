// Databse connection details
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:32768/projectDirectory';
var dbObj;

// Connect to database
MongoClient.connect(url, function(err, db) {
    dbObj = db;
    setUpServer(); // start server
});

// Server settings
var http = require('http');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var port = 3000;

function setUpServer() {
	http.createServer(function(req, res) {
		
<<<<<<< HEAD
		if (req.method == 'GET') {
			
			console.log('GET');

			res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' });
			let collection = dbObj.collection('projects');
		    
		    collection.find({}).toArray(function(err, projects) {
		    	res.write(JSON.stringify(projects));
		   		res.end();
		    });

		} else if (req.method == 'POST') {

			// console.log('POST', JSON.parse(req));

			res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' });

			res.write(JSON.stringify(
				[{
					'name': 'joe',
					'age': 36
				},
				{
					'name': 'john',
					'age': 34
				}]
			));

			res.end();

		}
=======
		res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin":"*" });
		var collection = dbObj.collection('projects');
	    
	    collection.find({}).toArray(function(err, projects) {
	    	res.write(JSON.stringify(projects));
	   		res.end();
	    });
>>>>>>> c05722295375908c7558601698703e1a217fe7bc

	}).listen(port);    	
	console.log('http://localhost:3000');
}
