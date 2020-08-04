const MongoClient = require('mongodb').MongoClient


MongoClient.connect(connectionString, (err, client) => {
    // ... do something here
  })