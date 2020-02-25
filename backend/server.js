const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const cookieParser = require('cookie-parser');

const journalRoute = require('./routes/journal');
const registerRoute = require('./routes/register');

const application = express()

mongoose.connect(process.env.database, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false,useUnifiedTopology: true})
	.then(() => console.log('DB connected'))
	.catch(error => console.log(error));



//Express handles HTTP POST, extract body of upcoming request and expose it on req.body
//convert to json format
application.use(bodyParser.json()); 


//routes
//(/routes,middleware function)
application.use('/api',journalRoute);
application.use('/api',registerRoute);

//port
const port = process.env.PORT || 8000 //access to environment variable 
application.listen(port, () =>{
	console.log(`Server is running on port ${port}`);
})

/*const morgan = require('morgan');*/
/*const cors = require('cors');*/

/*application.use(morgan('dev'));*/
application.use(cookieParser());

//cors error of browser-to-broser communication 
/*if(process.env.NODE_ENV === 'development') {
	application.use(cors({origin: `${process.env.CLIENT_URL}` }));
}*/
