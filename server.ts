const express = require('express')
const app = express()

const cors = require('cors')

const PORT = process.env.PORT || 8080
app.use(cors())
import { v4 as uuidv4 } from 'uuid'
let users = [
  {
    id: 5,
    name: 'humaid',
  },
  {
    id: 6,
    name: 'jon',
  },
  {
    id: 7,
    name: 'jon',
  },
  {
    id: 8,
    name: 'jon',
  },
]

app.get('/users', (req, res) => {
  console.log('/users')
  res.send(users)
})
app.get('/addjon', (req, res) => {
  console.log('addjon')
  users = [
    ...users,
    {
      id: uuidv4(),
      name: 'jon',
    },
  ]
  res.send({})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}...`)
})
