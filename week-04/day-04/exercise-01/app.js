'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var app = express();
var url = 'mongodb://localhost:27017/reddit';
var jsonParser = bodyParser.json();

app.use('/', express.static('public'))
app.get('/', function (req, res) {
  res.send('hello, world');
});
app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/public/html/index.html');
});
app.get('/addpost', function (req, res) {
  res.sendFile(__dirname + '/public/html/addpost.html');
});
app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/public/html/login.html');
});
app.get('/modify', function (req, res) {
  res.sendFile(__dirname + '/public/html/modify.html');
});

app.get('/posts', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('messages');
    collection.find({}, { _id: 0 }).sort({ timestamp: 1 }).toArray(function (err, docs) {
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
  var user = req.headers.username;
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('messages');
    var reqBody = {
      'title': req.body.title,
      'href': req.body.href,
      'id': 3,
      'timestamp': new Date().getTime(),
      'score': 0,
      'owner': user
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
    var collection = db.collection('messages');
    var queryId = parseInt(req.params.id);
    collection.find({ id: queryId }).toArray(function (err, docs) {
      docs[0].score += 1;
      collection.update({ id: queryId }, { $set: { 'score': docs[0].score } });
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(docs[0]));
      db.close();
    })
  })
});
app.put('/posts/:id/downvote', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('messages');
    var queryId = parseInt(req.params.id);
    collection.find({ id: queryId }).toArray(function (err, docs) {
      docs[0].score -= 1;
      collection.update({ id: queryId }, { $set: { 'score': docs[0].score } });
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(docs[0]));
      db.close();
    })
  })
});
app.delete('/posts/:id', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('messages');
    var queryId = parseInt(req.params.id);
    collection.find({ id: queryId }).toArray(function (err, docs) {
      collection.deleteOne({ 'id': queryId }, function (err, results) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(docs[0]));
        db.close();
      })
    })
  })
});
app.put('/posts/:id', jsonParser, function (req, res) {
  var user = req.headers.username;
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('messages');
    var queryId = parseInt(req.params.id);
    var modifyTitle = req.body.title;
    var modifyHref = req.body.href;
    var modifyDate = new Date().getTime();
    collection.update({ id: queryId }, { $set: { 'title': modifyTitle, 'href': modifyHref, 'timestamp': modifyDate, 'owner':user } }, function (err, result) {
      collection.find({ id: queryId }).toArray(function (err, docs) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(docs[0]));
        db.close();
      })
    });
  })
});
app.post('/login', jsonParser, function (req, res) {
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('users');
    var loginUser = req.body.username;
    var obj = null;
    collection.find( {'userName': loginUser} ).toArray(function (err, docs) {
      if (docs.length !== 0) {
        obj = docs[0];
      } else {
        obj = {'userName': 'undefined'};
      }
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(obj));
      db.close();
    })
  })
})

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
function initDataBase() {
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('messages');
    collection.insertMany(initMessages, function (err, result) {
      console.log("Inserted initMessages into the document collection");
    });
    db.close();
  });
}
var initUsers = [
  {
    'userName': 'zoe',
    'id': 0
  },
  {
    'userName': 'guest',
    'id': 1
  }
];
function createUserModel() {
  MongoClient.connect(url, function (err, db) {
    var collection = db.collection('users');
    collection.insertMany(initUsers, function (err, result) {
      console.log("Inserted initMessages into the document collection");
    });
    db.close();
  });
}

console.log('listening port:8080');
app.listen(8080);
