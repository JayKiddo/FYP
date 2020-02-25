const {check} = require('express-validator');

exports.memberRegisterValidator = [
	check('name').not().isEmpty().withMessage('Name is required'),
	check('email').isEmail().withMessage('Please enter a valid email'),
	check('password').isLength({min: 7}).withMessage('Password must be longer than 6 character')
];

exports.memberLoginValidator = [
	check('email').isEmail().withMessage('Please enter a valid email'),
	check('password').isLength({min: 7}).withMessage('Password must be longer than 7 character')
];