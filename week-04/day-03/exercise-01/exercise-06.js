'use strict';

var mongodb = require('mongodb');
var express = require('express');
var ejs = require('ejs');
var MongoClient = mongodb.MongoClient;
var app = express();
var url = 'mongodb://localhost:27017/epam';

app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use('/views', express.static('views'));
app.get('/', function (req, res) {
  res.send('hello');
})

app.get('/students/:githubname', function (req, res) {
  var githubName = req.params.githubname;
  var fields = req.query.fields;
  var fieldsStr = {
    _id : 0
  };
  fields.forEach(function(value) {
    fieldsStr[value] = 1;
  }, this);
  var obj;
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    var collection = db.collection('students');
    collection.find({ github: githubName }, fieldsStr).toArray(function (err, docs) {
      if (docs[0] === undefined) {
        obj = {
          'error': 'not exist'
        };
        obj = JSON.stringify(obj, null, 2);
      } else {
        obj = JSON.stringify(docs[0], null, 2);
      }
      res.render('./response.html', { response: obj });
    })
    db.close();
  });
})

console.log('listening port:8080');
app.listen(8080);

