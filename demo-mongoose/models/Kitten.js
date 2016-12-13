const mongoose = require('mongoose')

const collection = 'superkitties';

// Schema definition
const kittySchema = mongoose.Schema({
	name: String
},
{ collection });

// Model definition
var Kitten = mongoose.model('Kitten', kittySchema);

module.exports = Kitten
