// Access from shell

mongo dbh84.mlab.com:27847/restaurants-demo -u <dbuser> -p <dbpassword>

mongo dbh84.mlab.com:27847/restaurants-demo -u admin -p admin12345


// Acces from Node

mongodb://<dbuser>:<dbpassword>@dbh84.mlab.com:27847/restaurants-demo

mongodb://admin:admin12345@dbh84.mlab.com:27847/restaurants-demo


user:admin

password:admin12345


// Para importar un JSON a nuestra BBDD online ejecutar desde la carpeta donde este el json

mongoimport -h dbh84.mlab.com:27847 -d restaurants-demo -c restaurants -u admin -p admin12345 --file primer-dataset.json


// JSON


[
{
"_id": "57ab1efcfd999cac66e8ef88",
"address": {
"building": "1007",
"coord": [
-73.856077,
40.848447
],
"street": "Morris Park Ave",
"zipcode": "10462"
},
"borough": "Bronx",
"cuisine": "Bakery",
"grades": [
{
"date": "2014-03-03T00:00:00.000Z",
"grade": "A",
"score": 2
},
{
"date": "2013-09-11T00:00:00.000Z",
"grade": "A",
"score": 6
},
{
"date": "2013-01-24T00:00:00.000Z",
"grade": "A",
"score": 10
},
{
"date": "2011-11-23T00:00:00.000Z",
"grade": "A",
"score": 9
},
{
"date": "2011-03-10T00:00:00.000Z",
"grade": "B",
"score": 14
}
],
"name": "Morris Park Bake Shop",
"restaurant_id": "30075445",
"image": "https://restaurants-finder.s3.amazonaws.com/restaurant-939435_960_720 (1).jpg"
},
{
"_id": "57ab1efcfd999cac66e8ef89",
"address": {
"building": "2780",
"coord": [
-73.98241999999999,
40.579505
],
"street": "Stillwell Avenue",
"zipcode": "11224"
},
"borough": "Brooklyn",
"cuisine": "American",
"grades": [
{
"date": "2014-06-10T00:00:00.000Z",
"grade": "A",
"score": 5
},
{
"date": "2013-06-05T00:00:00.000Z",
"grade": "A",
"score": 7
},
{
"date": "2012-04-13T00:00:00.000Z",
"grade": "A",
"score": 12
},
{
"date": "2011-10-12T00:00:00.000Z",
"grade": "A",
"score": 12
}
],
"name": "Riviera Caterer",
"restaurant_id": "40356018"
},
{
"_id": "57ab1efcfd999cac66e8ef8a",
"address": {
"building": "469",
"coord": [
-73.961704,
40.662942
],
"street": "Flatbush Avenue",
"zipcode": "11225"
},
"borough": "Brooklyn",
"cuisine": "Hamburgers",
"grades": [
{
"date": "2014-12-30T00:00:00.000Z",
"grade": "A",
"score": 8
},
{
"date": "2014-07-01T00:00:00.000Z",
"grade": "B",
"score": 23
},
{
"date": "2013-04-30T00:00:00.000Z",
"grade": "A",
"score": 12
},
{
"date": "2012-05-08T00:00:00.000Z",
"grade": "A",
"score": 12
}
],
"name": "Wendy'S",
"restaurant_id": "30112340"
},
{
"_id": "57ab1efcfd999cac66e8ef8b",
"address": {
"building": "351",
"coord": [
-73.98513559999999,
40.7676919
],
"street": "West   57 Street",
"zipcode": "10019"
},
"borough": "Manhattan",
"cuisine": "Irish",
"grades": [
{
"date": "2014-09-06T00:00:00.000Z",
"grade": "A",
"score": 2
},
{
"date": "2013-07-22T00:00:00.000Z",
"grade": "A",
"score": 11
},
{
"date": "2012-07-31T00:00:00.000Z",
"grade": "A",
"score": 12
},
{
"date": "2011-12-29T00:00:00.000Z",
"grade": "A",
"score": 12
}
],
"name": "Dj Reynolds Pub And Restaurant",
"restaurant_id": "30191841"
},
{
"_id": "57ab1efcfd999cac66e8ef8c",
"address": {
"building": "97-22",
"coord": [
-73.8601152,
40.7311739
],
"street": "63 Road",
"zipcode": "11374"
},
"borough": "Queens",
"cuisine": "Jewish/Kosher",
"grades": [
{
"date": "2014-11-24T00:00:00.000Z",
"grade": "Z",
"score": 20
},
{
"date": "2013-01-17T00:00:00.000Z",
"grade": "A",
"score": 13
},
{
"date": "2012-08-02T00:00:00.000Z",
"grade": "A",
"score": 13
},
{
"date": "2011-12-15T00:00:00.000Z",
"grade": "B",
"score": 25
}
],
"name": "Tov Kosher Kitchen",
"restaurant_id": "40356068"
},
{
"_id": "57ab1efcfd999cac66e8ef8d",
"address": {
"building": "8825",
"coord": [
-73.8803827,
40.7643124
],
"street": "Astoria Boulevard",
"zipcode": "11369"
},
"borough": "Queens",
"cuisine": "American ",
"grades": [
{
"date": "2014-11-15T00:00:00.000Z",
"grade": "Z",
"score": 38
},
{
"date": "2014-05-02T00:00:00.000Z",
"grade": "A",
"score": 10
},
{
"date": "2013-03-02T00:00:00.000Z",
"grade": "A",
"score": 7
},
{
"date": "2012-02-10T00:00:00.000Z",
"grade": "A",
"score": 13
}
],
"name": "Brunos On The Boulevard",
"restaurant_id": "40356151"
},
{
"_id": "57ab1efcfd999cac66e8ef8e",
"address": {
"building": "2206",
"coord": [
-74.1377286,
40.6119572
],
"street": "Victory Boulevard",
"zipcode": "10314"
},
"borough": "Staten Island",
"cuisine": "Jewish/Kosher",
"grades": [
{
"date": "2014-10-06T00:00:00.000Z",
"grade": "A",
"score": 9
},
{
"date": "2014-05-20T00:00:00.000Z",
"grade": "A",
"score": 12
},
{
"date": "2013-04-04T00:00:00.000Z",
"grade": "A",
"score": 12
},
{
"date": "2012-01-24T00:00:00.000Z",
"grade": "A",
"score": 9
}
],
"name": "Kosher Island",
"restaurant_id": "40356442"
},
{
"_id": "57ab1efcfd999cac66e8ef8f",
"address": {
"building": "7114",
"coord": [
-73.9068506,
40.6199034
],
"street": "Avenue U",
"zipcode": "11234"
},
"borough": "Brooklyn",
"cuisine": "Delicatessen",
"grades": [
{
"date": "2014-05-29T00:00:00.000Z",
"grade": "A",
"score": 10
},
{
"date": "2014-01-14T00:00:00.000Z",
"grade": "A",
"score": 10
},
{
"date": "2013-08-03T00:00:00.000Z",
"grade": "A",
"score": 8
},
{
"date": "2012-07-18T00:00:00.000Z",
"grade": "A",
"score": 10
},
{
"date": "2012-03-09T00:00:00.000Z",
"grade": "A",
"score": 13
},
{
"date": "2011-10-14T00:00:00.000Z",
"grade": "A",
"score": 9
}
],
"name": "Wilken'S Fine Food",
"restaurant_id": "40356483"
},
{
"_id": "57ab1efcfd999cac66e8ef90",
"address": {
"building": "1839",
"coord": [
-73.94626533649279,
40.6410713331572
],
"street": "Nostrand Avenue",
"zipcode": "11226"
},
"borough": "Brooklyn",
"cuisine": "Ice Cream, Gelato, Yogurt, Ices",
"grades": [
{
"date": "2014-07-14T00:00:00.000Z",
"grade": "A",
"score": 12
},
{
"date": "2013-07-10T00:00:00.000Z",
"grade": "A",
"score": 8
},
{
"date": "2012-07-11T00:00:00.000Z",
"grade": "A",
"score": 5
},
{
"date": "2012-02-23T00:00:00.000Z",
"grade": "A",
"score": 8
}
],
"name": "Taste The Tropics Ice Cream",
"restaurant_id": "40356731"
},
{
"_id": "57ab1efcfd999cac66e8ef91",
"address": {
"building": "6409",
"coord": [
-74.00528899999999,
40.628886
],
"street": "11 Avenue",
"zipcode": "11219"
},
"borough": "Brooklyn",
"cuisine": "American ",
"grades": [
{
"date": "2014-07-18T00:00:00.000Z",
"grade": "A",
"score": 12
},
{
"date": "2013-07-30T00:00:00.000Z",
"grade": "A",
"score": 12
},
{
"date": "2013-02-13T00:00:00.000Z",
"grade": "A",
"score": 11
},
{
"date": "2012-08-16T00:00:00.000Z",
"grade": "A",
"score": 2
},
{
"date": "2011-08-17T00:00:00.000Z",
"grade": "A",
"score": 11
}
],
"name": "Regina Caterers",
"restaurant_id": "40356649"
}
]