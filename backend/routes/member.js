//Dividing routes

const express = require('express');
const router = express.Router();
const {requireLogIn} = require('../controllers/authenticateControllers');
const {memberMiddleware,read,updateMember,photo} = require('../controllers/memberControllers');

router.get('/member/profile',requireLogIn,memberMiddleware,read);

router.put('/member/update',requireLogIn,memberMiddleware,updateMember)

router.get('/member/photo/:username',photo);

module.exports = router
