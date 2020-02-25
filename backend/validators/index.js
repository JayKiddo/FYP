
const { validationResult } = require('express-validator');

exports.runValidation = (req,res,next) => {
	//Finds the validation errors in this request and wraps them in an object
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array().map(element=> element.msg)});
    } 
    next();
};

//quay lai sua middleware function
//test next()