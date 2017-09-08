'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const breeds = require('./routes/breeds');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/',breeds);
app.use(express.static('public'));


const port = process.env.PORT || 3000;
const knex = require('./knex');

app.listen(port, () => {
  console.log('Listening on port', port);
});
