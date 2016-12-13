const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/movies";
const app = express();
const PORT = 3000;

MongoClient.connect(url, (err,db) => {
	if(err) throw err;
	console.log("Connnected to...")

	app.get('/movies', (req,res) => {
	
	const limit = +req.query.size || 20;
	const page = +req.query.page || 1;
	const skip = (limit*(page-1))+1;

	db.collection("movieDetails")

		.find({} /*, {title:1, _id:0} */)
		.sort({title:1})
		.limit(limit)
		.skip(skip)
		.toArray()
		.then( data => res.json(data))
		.catch(err => console.log(err))

	})

	app.get('/movies/genres/:genre', (req,res) => {

		const limit = +req.query.size || 20;
		const page = +req.query.page || 1;
		const skip = (limit*(page-1))+1;

		const genre =req.params.genre;

		db.collection("movieDetails")

			.find({genres: genre} /*, {title:1, _id:0} */)
			.sort({title:1})
			.limit(limit)
			.skip(skip)
			.toArray()
			.then( data => res.json(data))
			.catch(err => console.log(err))

	})

	app.get('/movies/countries/:countries', (req,res) => {

		const limit = +req.query.size || 20;
		const page = +req.query.page || 1;
		const skip = (limit*(page-1))+1;

		const countries =req.params.countries;

		db.collection("movieDetails")

			.find({genres: countries} /*, {title:1, _id:0} */)
			.sort({title:1})
			.limit(limit)
			.skip(skip)
			.toArray()
			.then( data => res.json(data))
			.catch(err => console.log(err))

	})
	
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))




