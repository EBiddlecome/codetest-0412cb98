//quick server test
// console.log('“If you spend too much time thinking about a thing, you’ll never get it done.” ~ Bruce Lee');

var express = require('express');
var app = express();   
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router(); 

// test route to see if working
// accessed at GET http://localhost:8080/tasks

router.get('/', function(req, res) {
  res.json(
		{ message: 'Router functional' }
	);   
});

app.use('/tasks', router);
app.listen(port);

//display notice in terminal when server running
console.log('SuDoIt Server running on port ' + port);