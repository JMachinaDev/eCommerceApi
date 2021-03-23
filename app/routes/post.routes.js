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


  // broke api
  // Update a user with id
  // router.put('/:id', Users.update)
  // Delete a User with id
  // router.delete('/:id', Users.delete);
  // Delete all (DANGEROUS)
  // router.delete('/', User.deleteAll);

  app.use('/api/users', router);
}

