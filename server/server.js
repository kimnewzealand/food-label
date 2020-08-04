const path = require('path')
const express = require('express')
const bodyParser= require('body-parser')
const connectionString='mongodb+srv://foodie:Myfood123@cluster0.iapap.mongodb.net/food-label?retryWrites=true&w=majority'
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => {
    console.log('Getting set up')
})

const MongoClient = require('mongodb').MongoClient

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

  MongoClient.connect(/* ... */)
  .then(client => {
    // ...
    const db = client.db('food-label')
    const foodsCollection = db.collection('store-foods')
    server.use(/* ... */)
    server.get(/* ... */)
    server.post('/addfood', (req, res) => {
      foodsCollection.insertOne(req.body)
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error(error))
    })
    server.listen(/* ... */)
  })
  .catch(console.error)

module.exports = server
