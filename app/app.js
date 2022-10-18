const express = require('express');

//Initialitions
const app = express();

//Setting
app.set('port', process.env.PORT || 3001);
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

module.exports = app