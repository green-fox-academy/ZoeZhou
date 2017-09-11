var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/', function(req, res, next){
  console.log(req.url);
  next();
});
app.use('/', express.static('folder/file'));

app.get('/', function (req, res) {
  res.send('Hello, Express.');
});
app.get('/contact', function (req, res) {
  console.log(req.query);
  res.send('this is contact page');
});

app.post('/contact', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render('page', {name: req.body});
});

app.get('/profile/:id', function (req, res) {
  res.send('your requesed id:' + req.params.id);
});
app.listen(3000)