 var mongo = require('mongodb').MongoClient                  
 var firstname = process.argv[2] 
 var lastname = process.argv[3]                                    

 var url = 'mongodb://localhost:27017/learnyoumongo'           




 mongo.connect(url, function(err, db) {
   if (err) throw err
     var docs = db.collection('docs')
   
   docs.insert ({ 
    firstname: firstname,
    lastname: lastname 
  }(err, data) => {
    console.log(JSON.strigify(data))
  }
  )     
   db.close()   
 }) 
