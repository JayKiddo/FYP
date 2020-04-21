//Dividing routes

const express = require('express');
const router = express.Router();
const {
	register,
	login,
	logout,
	requireLogIn,
	forgotPassword,
	resetPassword,
	validateAccount
	} = require('../controllers/authenticateControllers');



const {runValidation} =  require('../validators/index');

const {
	memberRegisterValidator,
	memberLoginValidator,
	forgotPasswordValidator,
	resetPasswordValidator
	} = require('../validators/validate');

router.post('/account-validation',memberRegisterValidator, runValidation,validateAccount)
router.post('/register',register);


router.post('/login', memberLoginValidator, runValidation, login);
router.get('/logout',logout);

//testing validating token
router.get('/secret',requireLogIn,(req,res)=>{
	res.json({
		member: req.user
	});
});

router.put('/forgot-password',forgotPasswordValidator,runValidation,forgotPassword)
router.put('/reset-password',resetPasswordValidator,runValidation,resetPassword)


module.exports = router

//router is exported to module object in the root 