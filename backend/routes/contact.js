//Dividing routes

const express = require('express');
const router = express.Router();

const {contact} = require('../controllers/contactController');

const {runValidation} =  require('../validators/index');
const {contactValidator} =  require('../validators/contact');

//only admin is able to create new category
router.post('/contact',contactValidator,runValidation,contact);

module.exports = router
