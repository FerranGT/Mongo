const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyparser = require('body-parser')
const ObjectId = require('mongodb').ObjectID
const url = "mongodb://localhost:27017/todo"//El nombre de la BBDD que queremos acceder
const PORT = 3000;

const app = express()


MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("connected to DB...")



app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

app.get('/', (req,res) => {
	const title = "TODO Tasks"
	db.collection("tasks")
			.find( { "done": false } )
			.toArray()
			.then( data => res.render('index', { title, data } ))
			//.then( () => db.close() )
			.catch( err => console.log(err) )
	
})

app.get('/completed', (req,res) => {
	const title = "COMPLETED Tasks"
	db.collection("tasks")
			.find( { "done": true } )
			.toArray()
			.then( data => res.render('index', { title, data } ))
			//.then( () => db.close() )
			.catch( err => console.log(err) )
})

app.get('/tasks', (req,res) => {
	db.collection("tasks")
			.find( { } )
			.toArray()
			.then( data => res.json(data))
			//.then( () => db.close() )
			.catch( err => console.log(err) )
})

// // curl --request POST 'http://localhost:3000/task' --data 'desc=My new task'
app.post('/task', (req,res) => {
	var newTask = req.body;
	newTask.done = false;
	newTask.createdDate = Date();
	//console.log ("nueva tarea: " + newTask);
	db.collection("tasks").insert(newTask)
	.then( data => res.redirect('/'));
})

// // curl --request DELETE 'http://localhost:3000/task/2'
app.delete('/task/:id', (req,res) => {
	const id = req.params.id;
	db.collection("tasks").remove({"_id": ObjectId(id)})
	res.sendStatus(200);
})

// // curl -X PUT http://localhost:3000/task/2 --data done=true
app.put('/task/:id', (req,res) => {
	const id = req.params.id;

	db.collection("tasks")
	.updateOne({"_id": ObjectId(id)}, 
		{$set:{ 
				"done": true,
				updatedDate: Date() }})

	res.sendStatus(200);

})


})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )




