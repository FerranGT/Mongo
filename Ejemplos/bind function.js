let getArrayField = ( field, docs ) => docs.map( doc => doc[field] );

var restaurants = [
	{
		name: "Kati Hooe",
		age: 10
	},
	{
		name: "Britteny Uglow",
		age: 4
	},
	{
		name: "Milo Brihon",
		age: 17
	},
	{
		name: "Cathie Spletzer",
		age: 34
	}

]

//getArrayField("name", restaurants)

let getArrayNames = getArrayField.bind(null  /* this */ , "name")
let getArrayAges = getArrayField.bind(null  /* this */ , "age")

getArrayNames(restaurants)
getArrayAges(restaurants)

//getArrayNames(restaurants, "age")