//Dividing routes

const express = require('express');
const router = express.Router();

const {requireLogIn} = require('../controllers/authenticateControllers');
const {adminMiddleware,read} = require('../controllers/memberControllers');
const {createJournal,listJournal,listJournalCategoriesTags,readJournal,deleteJournal,updateJournal} = require('../controllers/journalControllers')

router.post('/journal',requireLogIn,adminMiddleware,createJournal);

//return journals,categories and tags
router.get('/journals',listJournal);
router.post('/blogs-categories-tags',listJournalCategoriesTags);

//return single journal
router.get('/journal/:slug',readJournal);

//delete journal
router.delete('/journal/:slug',requireLogIn,adminMiddleware,deleteJournal);

//update journal
router.put('/journal/:slug',requireLogIn,adminMiddleware,updateJournal);

module.exports = router

//router is exported to module object in the root 