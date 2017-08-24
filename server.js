const express = require('express'); const app = express();
const knex = require('./knex');
const port = process.env.PORT || 9000; app.listen(port, () => { console.log('Listenting on Port', port);
})
