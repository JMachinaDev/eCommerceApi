const express = require("express");
const cors = require('cors');

const corsOptions = {
  // origin: "http://localhost:8081"
  origin: "*"
};

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

// Start DB
const db = require('./app/models');
const dbConfig = require("./app/config/db.config");
const Role = db.role;

db.mongoose
  .connect(`${db.url}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Successfully connected to MongoDB!');
    initial();
  }).catch((err) => {
    console.log('Could not connect to DB' + err);
    process.exit(1);
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: 'user'
      }).save(err => {
        if (err) {
          console.log('error', err);
        }
        console.log('Added "user" to roles collection');
      });

      new Role({
        name: 'moderator'
      }).save(err => {
        if (err) {
          console.log('Error', err);
        }
        console.log('Added "moderator" to roles collection');
      });

      new Role({
        name: 'admin'
      }).save(err => {
        if (err) {
          console.log('Error', err);
        }
        console.log('Added "admin" to roles collecion');
      });
    }
  });
};

app.get('/', (req, res) => {
  res.send({ message: "Testing UwU" });
});

// Import ROUTES
require('./app/routes/post.routes')(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// Listen to DB
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
