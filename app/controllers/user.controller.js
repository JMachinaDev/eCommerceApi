const db = require('../models');
// TODO: add the rest of the route methods to complete CRUD operations
// https://bezkoder.com/node-express-mongodb-crud-rest-api/
// TODO: SANITIZE endpoints for routes with validator
//https://express-validator.github.io/docs/custom-validators-sanitizers.html


// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty' }).end();
    return
  }
  // Create User
  const User = new db.user({
    "name": {
      "first_name": req.body.first_name,
      "last_name": req.body.last_name
    },
    "email": req.body.email,
    "mobile": req.body.mobile
  });

  // Save user in db
  User
    .save(User)
    .then(data => {
      console.log("created new user" + data);
      res.json(data, null, 2);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occured while creating the user'
      }).end();
    });
};

// Retrieve all Users from the database
exports.findAll = (req, res) => {
  // const email = req.query.email;
  // let condition = email ? { name: { $regex: new RexExp(email), $options: 'i' } } : {};

  db.user.find()
    .then(data => {
      res.send(data);
    }).catch(err => {
      res.staus(500).send({
        message: err.message || 'Error retrieving Users'
      }).end();
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  db.user.findById(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "User ID not found , id: " + id });
      } else {
        res.send(data);
      };
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving User with id: ' + id || err
      }).end();
    });
};

// Update a User by the id in the request
exports.delete = (req, res) => {
  return console.log('Controller not created yet UwU')
};

// Find all published Users
exports.findAllPublished = (req, res) => {
  return console.log('Controller not created yet UwU')
};
