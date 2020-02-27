//pakages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();;
const cors = require('cors');
const cookieParser = require('cookie-parser');

const morgan = require('morgan');

//middlewares
const journalRoute = require('./routes/journal');
const authenticateRoute = require('./routes/authenticate');
const memberRoute = require('./routes/member');
const categoryRoute = require('./routes/category');
const tagRoute = require('./routes/tag');



const application = express()

mongoose.connect(process.env.database, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false,useUnifiedTopology: true})
	.then(() => console.log('DB connected'))
	.catch(error => console.log(error));

//Express handles HTTP POST, extract body of upcoming request and expose it on req.body
//convert to json format
application.use(morgan('dev')); 
application.use(bodyParser.json()); //information is passed in json format => req.body
application.use(cookieParser());	//take info trong cookie

//cors error of browser-to-broser communication 
if(process.env.NODE_ENV === 'development') {
	application.use(cors({origin: `${process.env.CLIENT_URL}` }));
}

//using routes
//(/routes,middleware function)
application.use('/api',journalRoute);
application.use('/api',authenticateRoute);
application.use('/api',memberRoute);
application.use('/api',categoryRoute);
application.use('/api',tagRoute);

//port
const port = process.env.PORT || 8000
application.listen(port, () =>{
	console.log(`Server is running on port ${port}`);
})


/*const morgan = require('morgan');
application.use(morgan('dev'));*/ 
//log request to console
