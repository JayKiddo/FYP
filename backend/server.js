const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


//Morgan is basically a logger, on any requests being made,it generates logs automatically.


//application = instance of express()
const application = express()



//connect to database
mongoose.connect(process.env.database_cloud, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false,useUnifiedTopology: true})
	.then(() => console.log('DB connected'));

//What are the use of these packages ?
application.use(morgan('dev'));
application.use(bodyParser.json());
application.use(cookieParser());


//cors error of browser-to-broser communication 
if(process.env.NODE_ENV === 'development') {
	application.use(cors({origin: `${process.env.CLIENT_URL}` }));
}


//creating routes
//Server receives request to slice API,the server respond
application.get('/api',(req,res)=>{
    res.json({time: Date().toString()});
})

//port
const port = process.env.PORT || 8000 //access to environment variable 
application.listen(port, () =>{
	console.log(`Server is running on port ${port}`);
})

