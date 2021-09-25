'use strict';
const express = require('express');
const router = express.Router();
const { saveUserDetails, getUserDetails, updateUserDetails, deleteUserDetails } = require('./service')
router.post('/createUsers', async (req, res, next) => {
    const response = await saveUserDetails(req.body)
    return res.status(response.statusCode).json(response.statusMessage)
});

router.get('/retrieveUserInfo', async (req, res, next) => {
    const response = await getUserDetails(req.body)
    return res.status(response.statusCode).json(response.statusMessage)
});

router.put('/updateUserInfo', async (req, res, next) => {
    const response = await updateUserDetails(req.body)
    return res.status(response.statusCode).json(response.statusMessage)
});
router.delete('/deleteUserInfo', async (req, res, next) => {
    const response = await deleteUserDetails(req.body)
    return res.status(response.statusCode).json(response.statusMessage)
});
module.exports = router;