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

app.get('/students', function (req, res) {
  var obj = { students: [] };
  var gender = req.query.gender;
  var fields = req.query.fields;
  var fieldsStr = {
    _id: 0
  };
  if (fields !== undefined) {
    fields.forEach(function (value) {
      fieldsStr[value] = 1;
    }, this);
  }
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    var collection = db.collection('students');
    if (gender !== undefined) {
      collection.find({ 'gender': gender }, fieldsStr).toArray(function (err, docs) {
        obj.students = docs;
        res.render('./response.html', { response: JSON.stringify(obj, null, 2) });
      });
    } else {
      collection.find({}, fieldsStr).toArray(function (err, docs) {
        obj.students = docs;
        res.render('./response.html', { response: JSON.stringify(obj, null, 2) });
      });
    }
    db.close();
  });
})

console.log('listening port:8080');
app.listen(8080);

