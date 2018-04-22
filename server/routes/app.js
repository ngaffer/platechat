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

// Connect
// const connection = (closure) => {
//     return mongoose.connect('mongodb://localhost:27017/platechat', (err, client) => {
//         if (err) return console.log(err);

//         let db = mongoose.db('platechat');
//         closure(db);
//     });
// };

// Error handling
// const sendError = (err, res) => {
//     response.status = 501;
//     response.message = typeof err == 'object' ? err.message : err;
//     res.status(501).json(response);
// };

// Response handling
// let response = {
//     status: 200,
//     data: [],
//     message: null
// };

// Get users
// router.get('/test', (req, res) => {
//     connection((db) => {
//         db.collection('tests')
//             .find()
//             .toArray()
//             .then((users) => {
//                 response.data = users;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });

module.exports = router;