const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../../models/user');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost:27017/platechat');

// router.get('/user', function(req, res, next) {
//     res.send('hello');
// });

// assumes path "/user"
router.post('/', function(req, res, next) {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred.',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created.',
            obj: result
        });
    });
});

module.exports = router;
