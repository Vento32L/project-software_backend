const express = require('express');

//Initialitions
const app = express();

//Setting
app.set('port', process.env.PORT || 3001);
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//Routes
app.use(require('./routes/grade.route'))
app.use(require('./routes/student.route'))
module.exports = app