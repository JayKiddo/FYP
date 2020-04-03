//Dividing routes

const express = require('express');
const router = express.Router();

const {requireLogIn,verifyMemberId} = require('../controllers/authenticateControllers');
const {adminMiddleware,read,memberMiddleware} = require('../controllers/memberControllers');
const {
	createJournal,
	listJournal,
	listJournalCategoriesTags,
	readJournal,
	deleteJournal,
	updateJournal,
	showPhoto,
	listRelatedJournals,
	listSearch,
 	listJournalByUsername
} = require('../controllers/journalControllers')


router.post('/journal',requireLogIn,adminMiddleware,createJournal);
//return journals,categories and tags
router.get('/journals',listJournal);
//use post to send req.body 
router.post('/blogs-categories-tags',listJournalCategoriesTags);
router.get('/journal/:slug',readJournal);
router.delete('/journal/:slug',requireLogIn,adminMiddleware,deleteJournal);
router.put('/journal/:slug',requireLogIn,adminMiddleware,updateJournal);

router.get('/journal/photo/:slug',showPhoto)

router.post('/journals/relatedJournal',listRelatedJournals)
router.get('/journals/search',listSearch)


//Member's journal route

router.get('/:username/journals',listJournalByUsername);

router.post('/member/journal',requireLogIn,memberMiddleware,createJournal);
router.delete('/member/journal/:slug',requireLogIn,memberMiddleware,verifyMemberId,deleteJournal);
router.put('/member/journal/:slug',requireLogIn,memberMiddleware,verifyMemberId,updateJournal);


module.exports = router

//router is exported to module object in the root 