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
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to database!');
  }).catch((err) => {
    console.log('Could not connect to DB' + err);
    process.exit(1);
  });

app.get('/', (req, res) => {
  res.send({ message: "Testing UwU" });
});

// Import ROUTES
require('./app/routes/post.routes')(app);
// Listen to DB
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



// async function run(req, res) {
// const database = require("./app/models");
//   const client = database.MongoClient;
//   try {
//     await client.connect()
//     const db = client.db('sample_mflix');
//     // this code gets collection and inserts new document
//     const collection = await db.collection('userInfo'); // gets collection
//     let insertObj = await collection.insertOne(
//       {
//         'first_name': 'Robert',
//         'last_name': 'Snyder',
//         'zip': 46516
//       });
//     //queries first_name
//     // const query = { first_name: 'Robert' }
//     // const person = await userInfo.findOne(query);
//     res.setheader['Content-Type', 'application/json'];
//     res.send(insertObj);
//   } catch (err) {
//     console.error(err);
//     res.writeHead(400, 'You done messed up A-Aron');
//     res.write(err.toString());
//     res.end();
//   } finally {
//     // Ensures that the client will close when you finish/error
    // await client.logout();
//   }
// }
// app.post("/users", (req, res, next) => Promise.resolve(run(req, res).catch(next)));



