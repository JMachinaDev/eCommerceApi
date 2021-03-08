const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/', async (req, res) => {
  try {
    const posts = await User.find();
    res.json(posts);
  } catch {
    res.json({ message: err })
  }
});

router.post('/', async (req, res) => {
  const postUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });
  try {
    const savedUser = await postUser.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;
