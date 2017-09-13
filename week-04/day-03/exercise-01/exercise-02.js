'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  var collection = db.collection('students');
  //find my file
  collection.find({ name: 'Zoe Zhou' }).toArray(function (err, docs) {
    console.log(docs);
  });
  // find github name
  collection.find({}, { github: 1, _id: 0 }).toArray(function (err, docs) {
    console.log(docs);
  });
  // find name except my
  collection.find({ name: { $nin: ['Zoe Zhou'] } }, { name: 1, _id: 0 }).toArray(function (err, docs) {
    console.log(docs);
  });
  //print the males or the females
  collection.find({},{gender:1,_id:0}).toArray(function (err, docs) {
    console.log(docs);
  });

  db.close();
});

