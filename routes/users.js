'use strict';

const express = require('express');

const router = express.Router();

const knex = require('../knex');

const bodyParser = require('body-parser');

router.post('/users', (req, res, next)=>{
  knex('users')
    .select('*')
    .where('email', req.body.email)
    .then((user)=>{
      if(!user.length){
        knex('users')
          .insert(req.body, '*')
          .then((newUser)=>{
            res.send(newUser[0]);
          });
      }else{
        res.send(user[0]);
      }
    });
})

module.exports = router;
