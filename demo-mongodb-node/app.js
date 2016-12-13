var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server

MongoClient.connect(url, (err, db) => {

  if (err) throw("There were problems connecting to the DB server...");

  db.collection('restaurants')
      .find() // Devuelve un cursor
      .toArray( (err, docs) => {
      	console.log (docs) 
      	 db.close()
      	}); // lo transformamos en un array de objetos
      //.forEach( (docs) => console.log (docs) ); //otra manera de transformar el cursor a objetos
  //db.close();

});

//Otra manera

// var MongoClient = require('mongodb').MongoClient;

// // Connection URL
// var url = 'mongodb://localhost:27017/test';
// // Use connect method to connect to the Server

// MongoClient.connect(url, (err, db) => {

//   if (err) throw("There were problems connecting to the DB server...");

//   var counter = 0;

//   /* EXAMPLE 1 */

//   // db.collection('restaurants')
//   //     .find( { "borough": "Manhattan" } )
//   //     .limit(100)
//   //     .forEach( ({name}) => {
//   //       console.log (name)
//   //     })

//   /* EXAMPLE 2 */
//   db.collection('restaurants')
//       .find( { "borough": "Manhattan" } )
//       //.limit(100)
//       .toArray()
//       .then( ( docs ) => console.log (docs) )
//       .then( () => db.close() )
//       .catch( (err) => console.log (err) )

//   // db.collection('restaurants').count()
//   //   .then( num => console.log(num) )

//   // db.close();

// });

