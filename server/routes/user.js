const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');


mongoose.connect('mongodb://localhost:27017/platechat');

// router.get('/user', function(req, res, next) {
//     res.send('hello');
// });

// assumes path "/user"
router.post('', (req, res, next) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save((err, result) => {
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

router.post('signin', (req, res, next) => {
  User.findOne({email: req.body.email}, (err, user) => {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred.',
        error: err
      });
    }
    if (!user) {
      // Using generic message for security purposes
      return res.status(401).json({
        title: 'Login Failed.',
        error: {message: 'Invalid login credentials.'}
      })
    }
    // Passing same generic message for security purposes
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'Login Failed.',
        error: {message: 'Invalid login credentials.'}
      })
    }
    var token = jwt.sign({user: user}, 'templocalsecret', {expiresIn: 7200});
    response.status(200).json({
      message: 'Successfully logged in.',
      token: token,
      userId: user._id
    })
  })

});

module.exports = router;
