const express = require('express')
const db = require('./db');

const routes = require('./routes')

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', routes )

app.listen(PORT, () => console.log(`Listening on port ${PORT}`) )