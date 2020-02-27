//Dividing routes

const express = require('express');
const router = express.Router();
const {requireLogIn} = require('../controllers/authenticateControllers');
const {memberMiddleware,read} = require('../controllers/memberControllers');

router.get('/profile',requireLogIn,memberMiddleware,read);


module.exports = router
