var MongoClient = require('mongodb').MongoClient;
var writeFile = require('fs-writefile-promise')

var getArrayField = ( field, docs ) => docs.map( doc => doc[field] );

var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, (err, db) => {

  if (err) throw("There were problems connecting to the DB server...");

  var counter = 0;

  db.collection('restaurants')
      //.find()
      //.find( { "borough": "Manhattan" } )
      //.find( { "address.zipcode": "10075" } )
      //.find( { "grades.grade": "B" } )
      //.find( { "grades.score": { $gt : 30 } } )
      //.find( { "grades.score": { $lt : 10 } } )
      //.find( { "cuisine": "Italian", "address.zipcode": "10075" })
      // .find( { $or: [
      //   { "cuisine": "Italian" },
      //   { "address.zipcode": "10075" }
      // ]})
      .find( { "borough": "Manhattan" }, { name: 1, borough: 1, "grades.score": 1, _id: 0 } )
      //.sort( { "borough": 1, "address.zipcode": 1 } )
      .limit(100)
      .toArray()
      //.then( getArrayField.bind(null, "borough") )
      //.then( (docs) => docs.map( doc => doc.grades ) )
      .then( docs => JSON.stringify(docs) )
      .then( writeFile.bind(null, 'output.json') )
      .then( () => console.log("file written succesfully...") )
      .then( () => db.close() )
      .catch( (err) => console.log (err) )

});