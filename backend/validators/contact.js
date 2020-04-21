const {check} = require('express-validator');

exports.contactValidator = [
	check('name').not().isEmpty().withMessage('Name is required'),
	check('email').isEmail().withMessage('Please enter a valid email address'),
	check('message').not().isEmpty().isLength({min:50}).withMessage('Your message must be longer than 50 charactacter')
]
