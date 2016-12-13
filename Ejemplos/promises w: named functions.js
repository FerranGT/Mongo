var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server

MongoClient.connect(url, (err, db) => {

  if (err) throw("There were problems connecting to the DB server...");

  var counter = 0;

  /* EXAMPLE 1 */

  // db.collection('restaurants')
  //     .find( { "borough": "Manhattan" } )
  //     .limit(100)
  //     .forEach( ({name}) => {
  //       console.log (name)
  //     })

  /* EXAMPLE 2 */

  const getArrayNames = ( docs ) => docs.map( doc => doc.name );
  const filterByOld = ( names ) => names.filter( name => name.includes("Old") );

  db.collection('restaurants')
      .find( { "borough": "Manhattan" } )
      .limit(100)
      .toArray()
      .then( getArrayNames )
      .then( filterByOld )
      .then( console.log )
      .then( () => db.close() )
      .catch( (err) => console.log (err) )

  // db.collection('restaurants').count()
  //   .then( num => console.log(num) )

  // db.close();

});