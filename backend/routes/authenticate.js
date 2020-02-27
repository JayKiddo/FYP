//Dividing routes

const express = require('express');
const router = express.Router();
const {register,login,logout} = require('../controllers/authenticateControllers');
const {requireLogIn} = require('../controllers/authenticateControllers');


const {runValidation} =  require('../validators/index');
const {memberRegisterValidator} = require('../validators/validate');
const {memberLoginValidator} = require('../validators/validate');

router.post('/register', memberRegisterValidator, runValidation, register);
router.post('/login', memberLoginValidator, runValidation, login);
router.get('/logout',logout);

//testing validating token
router.get('/secret',requireLogIn,(req,res)=>{
	res.json({
		member: req.user
	});
});


module.exports = router

//router is exported to module object in the root 