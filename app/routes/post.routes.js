const express = require('express');
const router = express.Router();

module.exports = app => {
  const Users = require('../controllers/user.controller');

  // Create a new User
  router.post('/', Users.create);

  // Retrieve all Users
  router.get('/', Users.findAll);

  // Retrieve all published Users
  router.get('/published', Users.findAllPublished);

  // Retrieve a single User with id
  router.get('/:id', Users.findOne);

  app.use('/api/users', router);
}

