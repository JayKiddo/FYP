const {check} = require('express-validator');

exports.memberRegisterValidator = [
	check('name').not().isEmpty().withMessage('Name is required'),
	check('email').isEmail().withMessage('Please enter a valid email'),
	check('password').isLength({min: 7}).withMessage('Password must be longer than 6 characters')
];

exports.memberLoginValidator = [
	check('email').isEmail().withMessage('Please enter a valid email'),
	check('password').isLength({min: 7}).withMessage('Password must be longer than 6 characters')
];

exports.forgotPasswordValidator = [
	check('email').not().isEmpty().isEmail().withMessage("Please enter a valid email")
];

exports.resetPasswordValidator = [
	check('newPassword').isLength({min: 7}).withMessage("Password must be longer than 6 characters")
];