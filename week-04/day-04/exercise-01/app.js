'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var app = express();
var url = 'mongodb://localhost:27017/reddit';
var jsonParser = bodyParser.json();

app.get('/hello', function (req, res) {
  res.send('hello, world');
});

app.get('/posts', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    var collection = db.collection('messages');
    collection.find({}, { _id: 0 }).toArray(function (err, docs) {
      res.setHeader("Content-Type", "application/json");
      var obj = {
        posts: []
      };
      obj.posts = docs;
      res.send(JSON.stringify(obj));
    })
    db.close();
  });
});
app.post('/posts', jsonParser, function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    var collection = db.collection('messages');
    var reqBody = {
      'title': req.body.title,
      'href': req.body.href,
      'id': 3,
      'timestamp': new Date().getTime(),
      'score': 0
    };
    collection.find().sort({ timestamp: -1 }).limit(1).toArray(function (err, docs) {
      reqBody.id = docs[0].id + 1;
      collection.insert(reqBody, function (err, result) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(reqBody));
        db.close();
      });
    });
  });
});
app.put('/posts/:id/upvote', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    var collection = db.collection('messages');
    var queryId = parseInt(req.params.id);
    collection.find({ id: 1 }).toArray(function (err, docs) {
      console.log(docs);
      docs[0].score += 1;
      collection.update({id: queryId}, {$set:{'score': docs[0].score}});
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(docs[0]));
      db.close();
    })
  })
})

function initDataBase() {
  var initMessages = [
    {
      "id": 1,
      "title": "Crockford",
      "href": "http://9gag.com",
      "timestamp": 1494138425,
      "score": 1,
    },
    {
      "id": 2,
      "title": "JavaScript",
      "href": "http://www.google.com",
      "timestamp": 149413842345,
      "score": 2,
    }
  ];
  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the MongoDB server. Error:', err);
    }
    console.log('Connection established to ' + url);
    var collection = db.collection('messages');
    collection.insertMany(initMessages, function (err, result) {
      console.log("Inserted initMessages into the document collection");
    });
    db.close();
  });

}


console.log('listening port:8080');
app.listen(8080);
