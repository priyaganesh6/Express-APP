const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
app.use(bodyParser.urlencoded({extended : true}));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))
app.use(bodyParser.json())
const dbInstance = require('./db')
app.use('/user', require('./controller'));
app.listen(3000,()=>{
	console.log("Server Started on port 3000")
})