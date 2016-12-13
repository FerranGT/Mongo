const express = require('express')
const MongoClient = require('mongodb').MongoClient;
//ENVIRONMENT=production node app // Para ejecutar la version de produccion desde Node



const app = express();

app.use( express.static('public') )

const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
let urlDB = 'mongodb://localhost:27017/test';

// Connection URL
if (ENVIRONMENT === 'production') {
	urlDB = 'mongodb://admin:admin12345@ds047030.mlab.com:47030/restaurants-demo';
}

MongoClient.connect(url, (err, db) => {

  if (err) throw("There were problems connecting to the DB server...");

	app.get('/restaurants', (req, res) => {

	  db.collection('restaurants')
	      .find({})
	      .limit(10) // cursor
	      .toArray() // promise
	      .then( restaurants => { res.json(restaurants) } );

	});

});

app.listen(3000, ()=> console.log("Listening on 3000..."))