USERS COLLECTION

{
	_id: ObjectID("sdf8sd6fs9d6sd9f86sd98f6sd9fs"),
	username: "tony_alexion35",
	name: "Tony Alexion",
	password: "supersecret00000",
	email: "tonsor@inexpungeable.net",
	pic: "http://mypicserver.com/00001.png",
	github: "http://github.com/tony_alexion35"
	fav_movies:  [ 
		ObjectID("sdfsdf7ds8f7f8dsf8sd"),
		ObjectID("sd8sd9d8f7s9df79sd8f7")
	]
}



MOVIES COLLECTION

{
	_id: ObjectID("sdfsdf7ds8f7f8dsf8sd"),
	title: "Back to the future",
	year: 1984,
	total_favs: 1,
	visits: 43,
	viewed : [
		{
			location: [45.33452345, -34.234545534],
			place: "Cines Renoir",
			date: "04/03/2016 20:30"
		},
		{
			location: [45.33345345, -34.234544444],
			place: "Cines Marquee",
			date: "04/05/2016 20:30",
			user: {
				id: ObjectID("sdf8sd6fs9d6sd9f86sd98f6sd9fs"),
				name:  "Tony Alexion",
				pic: "http://mypicserver.com/00001.png"
			}
		}
	]
	ratings : [
		{
			score: 5,
			comment: "Movie is super-cool!",
			date: "02/03/2016"
			user: {
				id: ObjectID("sdf8sd6fs9d6sd9f86sd98f6sd9fs"),
				name:  "Tony Alexion",
				pic: "http://mypicserver.com/00001.png"
			}
		},
		{
			score: 0,
			comment: "Movie is shit!",
			date: "02/02/2016"
			user_id: ObjectID("sdfs9dfsd9fsd09f8sd0f98s0df8")
		}
	]
},
{
	_id: ObjectID("sd8sd9d8f7s9df79sd8f7"),
	title: "Back to the future II",
	year: 1988,
	total_favs: 1
},
{
	_id: ObjectID("sdf0sdf8s0df80sd98f0fs"),
	title: "Back to the future III",
	year: 1993,
	total_favs: 0
}