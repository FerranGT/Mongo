var MongoClient = require('mongodb').MongoClient;

var getArrayField = ( field, docs ) => docs.map( doc => doc[field] );

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, (err, db) => {

  if (err) throw("There were problems connecting to the DB server...");

  var counter = 0;

  db.collection('restaurants')
      .find( { "borough": "Manhattan" } )
      .limit(100)
      .toArray()
      .then( getArrayField.bind(null, "name") )
      .then( console.log )
      .then( () => db.close() )
      .catch( (err) => console.log (err) )

});