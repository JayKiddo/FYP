//Dividing routes

const express = require('express');
const router = express.Router();
const {returnSomething} = require('../controllers/journalControllers');

router.get('/',returnSomething);

module.exports = router

//router is exported to module object in the root 