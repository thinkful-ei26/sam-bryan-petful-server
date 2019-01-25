'use strict'

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { PORT, CLIENT_ORIGIN } = require('./config')
// const { dbConnect } = require('./db-mongoose')
// const {dbConnect} = require('./db-knex');
const { catQueue, dogQueue, peek } = require('./queue')
const app = express()

// const catQueue

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test',
  })
)

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
)

app.get('/api/cat', (req, res) => {
  res.json(peek(catQueue))
})

app.get('/api/dog', (req, res) => {
  res.json(peek(dogQueue))
})

app.delete('/api/dog', (req, res) => {
  res.json(dogQueue.dequeue())
  // let returnMessage = dogData.shift()
  // res.json(`Success! ${returnMessage.name} has been deleted.`)
})

app.delete('/api/cat', (req, res) => {
  res.json(catQueue.dequeue())
  // let returnMessage = catData.shift()
  // res.json(`Success! ${returnMessage.name} has been deleted.`)
})

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`)
    })
    .on('error', err => {
      console.error('Express failed to start')
      console.error(err)
    })
}

if (require.main === module) {
  // dbConnect()
  runServer()
}

module.exports = { app }
