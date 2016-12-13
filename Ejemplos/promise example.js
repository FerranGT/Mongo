
const fs = require('fs')

// fs.readFile('test.txt', 'utf-8', (err, contentFile) => {
// 	if (err) throw (err)
// 	const url = contentFile;
	
// 	request(url, (err, content, body) => {
// 		console.log(body) 
// 	})

// })

const readFilePromised = function( fileToRead ) {
	return new Promise( (resolve, reject) => {
		fs.readFile(fileToRead, 'utf-8', (err, contentFile) => {
			if (err) throw (err)
			resolve(contentFile);
		})
	})
}


const requestPromised = function(url) {
	return new Promise( (resolve, reject) => {
		request(url, (err, content, body) => {
			resolve(body) 
		})
	})
}

readFilePromised('test.txt')
	.then( requestPromised )
	.then( console.log ) 
