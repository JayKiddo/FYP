//Dividing routes

const express = require('express');
const router = express.Router();
const {requireLogIn} = require('../controllers/authenticateControllers')
const {adminMiddleware} = require('../controllers/memberControllers')
const {createCategory,listCategory,readCategory,deleteCategory} = require('../controllers/categoryControllers');

const {runValidation} =  require('../validators/index');
const {categoryValidator} =  require('../validators/categoryValidator');

//only admin is able to create new category
router.post('/category',categoryValidator,runValidation,requireLogIn,adminMiddleware,createCategory);
router.get('/categories',listCategory);
router.get('/category/:slug',readCategory);

router.delete('/category/:slug',requireLogIn,adminMiddleware,deleteCategory);


module.exports = router
