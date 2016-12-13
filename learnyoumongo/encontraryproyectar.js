var mongo = require('mongodb').MongoClient
let number = process.argv[2]
number *= 1; 
const url = `mongodb://localhost:27017/learnyoumongo`

mongo.connect(url, function(err, db) {
      // db te da acceso a la base de datos
      db.collection('parrots')                   
      .find( { "age": { $gt: number } } )                       
      .toArray(function(err, documents) {
      	let filteredArray = documents.map(doc => {
      		var description = {
      		name: doc.name,
      		age: doc.age
      	}
      	return description
      	})


      	console.log(filteredArray);                      
      })                                   

      db.close()
  })


//------------ buena -----------------------------

var mongo = require('mongodb').MongoClient
    var age = process.argv[2]

    var url = 'mongodb://localhost:27017/learnyoumongo'

    mongo.connect(url, function(err, db) {
      if (err) throw err
      var parrots = db.collection('parrots')
      parrots.find({
        age: {
          $gt: +age
        }
      }, {
        name: 1
      , age: 1
      , _id: 0
      }).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        db.close()
      })
    })

