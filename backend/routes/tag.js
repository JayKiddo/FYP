//Dividing routes

const express = require('express');
const router = express.Router();

const {requireLogIn} = require('../controllers/authenticateControllers')
const {adminMiddleware} = require('../controllers/memberControllers')
const {createTag,listTag,readTag,deleteTag} = require('../controllers/tagControllers');

const {runValidation} =  require('../validators/index');
const {tagValidator} =  require('../validators/tagValidator');

//only admin is able to create new category
router.post('/tag',tagValidator,runValidation,requireLogIn,adminMiddleware,createTag);
router.get('/tags',listTag);
router.get('/tag/:slug',readTag);

router.delete('/tag/:slug',requireLogIn,adminMiddleware,deleteTag);


module.exports = router
