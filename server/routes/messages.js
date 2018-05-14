const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Message = require('../../models/message');

// Connect
mongoose.connect('mongodb://localhost:27017/platechat');

// assume "/messages" as the path
router.get('', (req, res, next) => {
  Message.find()
    .exec((err, messages) => {
      if (err) {
        return messages.status(500).json({
          title: 'An error occurred.',
          err: err
        });
      }
      res.status(200).json({
        message: 'Success.',
        obj: messages
      });
    });
});

// assume "/messages" as the path
router.post('', (req, res, next) => {
  // TODO: update this object to also contain user, recipient, labels, etc.
  let message = new Message({
    content: req.body.content
  });
  message.save((err, result) => {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred.',
        err: err
      });
    }
    res.status(201).json({
      message: 'Saved message.',
      obj: result
    })
  });
});

module.exports = router;
