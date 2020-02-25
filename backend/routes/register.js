//Dividing routes

const express = require('express');
const router = express.Router();
const {register} = require('../controllers/registerControllers');
const {login} = require('../controllers/registerControllers');

const {runValidation} =  require('../validators/index');
const {memberRegisterValidator} = require('../validators/validate');
const {memberLoginValidator} = require('../validators/validate');

router.post('/register', memberRegisterValidator, runValidation, register);
router.post('/login', memberLoginValidator, runValidation, login);

module.exports = router

//router is exported to module object in the root 