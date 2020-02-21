const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();


//Morgan is basically a logger, on any requests being made,it generates logs automatically.


//application
//invoke express application
const application = express()

//middlewares
//HTTP request logger
//What are the use of these packages ?
application.use(morgan('dev'));
application.use(bodyParser.json());
application.use(cookieParser());

application.use(cors())

//creating routes
//Anytime server receives request to slice API,the server respond with current time in json format
application.get('/api',(req,res)=>{
    res.json({time: Date().toString()});
})

//port
const port = process.env.PORT || 8000 //access to environment variable 
application.listen(port, () =>{
	console.log(`Server is running on port ${port}`);
})

