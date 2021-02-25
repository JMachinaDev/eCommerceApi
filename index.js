const { MongoClient } = require("mongodb");
const express = require("express");

// Replace the uri string with your MongoDB deployment's connection string.
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const uri = process.env.MONGO_URI;
const PORT = 2000;
const client = new MongoClient(uri, {useNewUrlParser: true});
const app = express();

async function run(req, res) {
  try {
    await client.connect();
    console.log(uri)
    const database = client.db('sample_mflix');
    const collection = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await collection.findOne(query);

    res.send(movie);
    // console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);

app.get("/info", run);

app.listen(PORT,()=>{
  console.log(`Listening on port ${PORT}`);
});