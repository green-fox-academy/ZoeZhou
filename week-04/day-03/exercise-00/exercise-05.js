'use strict';

var mongodb = require('mongodb');
var express = require('express');
var MongoClient = mongodb.MongoClient;
var app = express();
var url = 'mongodb://localhost:27017/epam';

app.get('/', function (req, res) {
  res.send('hello');
})

app.get('/students', function (req, res) {
  let obj;
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    var collection = db.collection('students');
    collection.find().toArray(function(err, docs) {
      obj = JSON.stringify(docs);
    });
    console.log(obj);
    res.send(obj);
    db.close();
  });
  console.log('1111');
  
})

app.listen(8080);

