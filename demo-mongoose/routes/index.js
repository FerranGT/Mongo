const express = require('express')
const router = express.Router()

const Kitten = require('../models/Kitten')

router.get('/kittens', (req,res) => {

	// looking for data in the DB
	Kitten.find( (err, kittens) => {
	  if (err) return console.error(err);
	  res.json(kittens);
	})

// looking for data in the DB
	// Kitten.find()
	// 	.then( res.json )
	// 	.catch( console.log )
		// .then( kittens =>  res.json(kittens) )
		// .catch( err => console.error(err) )


})

router.post('/kitten', (req,res) => {

	// instance of model
	var yoko = new Kitten({ name: 'Yoko' });

	// saving data to the DB
	yoko.save( (err, yoko) => {
	  if (err) return console.error(err);
	  console.log("saved succesfully");
	});

})

module.exports = router;