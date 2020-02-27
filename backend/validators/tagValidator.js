const {check} = require('express-validator');

exports.tagValidator = [
	check('name').not().isEmpty().withMessage('Tag name is required'),
];
