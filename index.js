const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require('cors');

// Replace the uri string with your MongoDB deployment's connection string.
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const uri = process.env.MONGO_URI;
const PORT = 2000;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
app.use(cors());

async function run(req, res) {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const collection = database.collection('movies');
    const query = { title: 'Back to the Future' };
    const movie = await collection.findOne(query);

    res.send(movie);
  } catch (error) {
    console.error(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.logout();
  }
}
app.get("/info", (req, res, next) => Promise.resolve(run(req, res).catch(next)));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
