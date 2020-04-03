//Dividing routes

const express = require('express');
const router = express.Router();
const {requireLogIn} = require('../controllers/authenticateControllers');
const {memberMiddleware,read,updateMember,photo,readMemberAndJournals,adminMiddleware} = require('../controllers/memberControllers');


router.get('/member/profile',requireLogIn,memberMiddleware,read);
router.get('/admin/profile',requireLogIn,adminMiddleware,read)


router.put('/member/update',requireLogIn,memberMiddleware,updateMember)

router.get('/member/photo/:username',photo);

router.get('/member/profile/journal',requireLogIn,memberMiddleware,readMemberAndJournals)
router.get('/admin/profile/journal',requireLogIn,adminMiddleware,readMemberAndJournals)

module.exports = router
