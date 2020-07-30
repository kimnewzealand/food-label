const path = require('path')
const express = require('express')
const bodyParser= require('body-parser')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => {
    console.log('Getting set up')
})

server.post('/foods', (req, res) => {
    console.log(req.body)
  })

module.exports = server
