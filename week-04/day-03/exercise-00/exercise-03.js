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
  // update John Doe's github to johndoe
  collection.update({name:'John Doe'},{$set:{github:'johndoe'}});
  collection.find({name:'John Doe'}).toArray(function (err, docs) {
    console.log(docs);
  });
  // update your document with age
  collection.update({name:'Zoe Zhou'},{$set:{age: 21}});
  collection.find({name:'Zoe Zhou'}).toArray(function (err, docs) {
    console.log(docs);
  });
  db.close();
});

