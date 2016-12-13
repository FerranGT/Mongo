const express = require('express')
const MongoClient = require('mongodb').MongoClient
const prepareParams = require('./middleware/prepareParams')
const ObjectId = require('mongodb').ObjectID

const url = "mongodb://localhost:27017/test"
const PORT = 3000;

const app = express();

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("connected to DB...")

	app.use( prepareParams )

	app.get('/restaurants', (req, res) => {

		db.collection("restaurants")
			.find( { } , req.projection )
			.limit( 30 )
			.toArray()
			.then( data => res.json(data) )
			//.then( () => db.close() )
			.catch( err => console.log(err) )

	})

	app.get('/restaurants/borough/:borough', (req, res) => {

		const borough = req.params.borough;

		db.collection("restaurants")
			.find( {borough: borough } , req.projection )
			.limit( req.limit )
			.skip( req.skip )
			.toArray()
			.then( data => res.json(data) )
			//.then( () => db.close() )
			.catch( err => console.log(err) )

	})

	app.get('/restaurants/cuisine/:cuisine', (req, res) => {

		const cuisine = req.params.cuisine;

		db.collection("restaurants")
			.find( {cuisine: cuisine } , req.projection )
			.limit( req.limit )
			.skip( req.skip )
			.toArray()
			.then( data => res.json(data) )
			//.then( () => db.close() )
			.catch( err => console.log(err) )

	})

	app.get('/restaurants/cuisine/not/:cuisine', (req, res) => {

		const cuisine = req.params.cuisine;

		db.collection("restaurants")
			.find( {cuisine: {$ne:cuisine} } , req.projection )
			.limit( req.limit )
			.skip( req.skip )
			.toArray()
			.then( data => res.json(data) )
			//.then( () => db.close() )
			.catch( err => console.log(err) )

	})

	app.get('/restaurant/:id', (req, res) => {

		const id = ObjectId(req.params.id);
		console.log(id);

		db.collection("restaurants")
			.find( {_id: id } , req.projection )
			//.limit( req.limit )
			//.skip( req.skip )
			.toArray()
			.then( data => res.json(data) )
			//.then( () => db.close() )
			.catch( err => console.log(err) )

	})


})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )
