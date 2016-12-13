var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, (err, db) => {

  if (err) throw("There were problems connecting to the DB server...");

  db.close();

});