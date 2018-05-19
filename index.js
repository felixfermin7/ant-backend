const express = require('express')
const app = express()
const { Ants } = require('./lib/ants/src/')

app.get('/ants/:id', (req, res, next) =>
  Ants.get(req.params.id)
    .then(ants => res.json(ants))
    .catch(next)
//  return (res.send('Hello World!'))
)

app.get('/ants', (req, res, next) =>
  Ants.list()
)

app.post('/ants', (req, res, next) => {
  Ants.create(req.body.ant)
  return (res.send('Hello World!'))
})

app.put('/ants/:id', (req, res, next) => {
  Ants.update(req.params.id, req.body.ant)
  return (res.send('Hello World!'))
})

app.delete('/ants/:id', (req, res, next) => {
  Ants.delete(req.params.id)
  return (res.send('Hello World!'))
})

app.listen(4000, err => {
  if (err) return console.error(err)
  console.log('Ants app listening on port 4000!')
})

