'use strict';

const express = require('express');

const router = express.Router();

const knex = require('../knex');

const bodyParser = require('body-parser');

router.get('/breeds', (req, res, next) => {
  knex('breeds')
    .select(['id','name','picture','description','lifespan','size'])
    .then((data) => {
      res.send(data);
  })
  .catch((err) => {
      console.log(err);
  });

});

module.exports = router;
