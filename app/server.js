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

router.get('/', function(req, res, next) {
  res.json(
		{ message: 'HAI!' }
	);   
});

router.route('/list')

  .get(function(req, res) {
    list.view(function(err, list) {
      if (err) {
        return err;
      }
      res.json(list);   
    });
  });

router.route('/list')

  .post(function(req, res) {
    task.add(function(req, res) {
      if (err) {
        return err;
      }
      res.json({ message: 'Task created!' });
    });
  });

app.use('/tasks', router);
app.listen(port);

//display notice in terminal when server running
console.log('SuDoIt Server running on port ' + port);