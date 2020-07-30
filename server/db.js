const MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb-connection-string', (err, client) => {
    // ... do something here
  })