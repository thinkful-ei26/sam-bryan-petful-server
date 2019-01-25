'use strict'

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const { PORT, CLIENT_ORIGIN } = require('./config')
// const { dbConnect } = require('./db-mongoose')
// const {dbConnect} = require('./db-knex');

const app = express()

const dogData = [
  {
    imageURL:
      'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription:
      'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away',
  },
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/201gafgaga.jpg',
    imageDescription: 'DOGGGGG.',
    name: 'HeyZeus',
    sex: 'Female',
    age: 4,
    breed: 'German Shepherd',
    story: 'Robbed a bank',
  },
  {
    imageURL: 'httadsffd://Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'PUPPERS.',
    name: 'Xiphos',
    sex: 'Male',
    age: 5,
    breed: 'Labradoodle',
    story: 'Too ugly',
  },
]

const catData = [
  {
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street',
  },
  {
    imageURL: 'https:/asdfadfdat.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: '1231231232.',
    name: 'Duffy',
    sex: 'Female',
    age: 1,
    breed: 'Meowsers',
    story: 'Because cat',
  },
  {
    imageURL: 'https://assetar23452ize/tmg-slideshow_l.jpg',
    imageDescription: 'Is cat',
    name: 'Stuffy',
    sex: 'Male',
    age: 6,
    breed: 'Siamese',
    story: 'Meow',
  },
]

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
  res.json(catData[0])
})

app.get('/api/dog', (req, res) => {
  res.json(dogData[0])
})

app.delete('/api/dog', (req, res) => {
  let returnMessage = dogData.shift()
  res.json(`Success! ${returnMessage.name} has been deleted.`)
})

app.delete('/api/cat', (req, res) => {
  let returnMessage = catData.shift()
  res.json(`Success! ${returnMessage.name} has been deleted.`)
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
