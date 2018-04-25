const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../../models/user');

mongoose.connect('mongodb://localhost:27017/platechat');

router.get('/test', function(req, res, next) {
    res.send('hello');
});

router.post('/test', function(req, ress, next) {
    let email = req.body.email;
    let user = new User({
        firstName: 'Natasha',
        lastName: 'Gaffer',
        password: 'testpass',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;