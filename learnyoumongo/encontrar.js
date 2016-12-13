var mongo = require('mongodb').MongoClient
let number = process.argv[2]
number *= 1; 
const url = `mongodb://localhost:27017/learnyoumongo`

mongo.connect(url, function(err, db) {
      // db te da acceso a la base de datos
      db.collection('parrots')                   
      .find( { "age": { $gt: number } } )                       
      .toArray(function(err, documents) {
      	console.log(documents);                      
      })                                   

      db.close()
  })


