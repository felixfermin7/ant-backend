const express = require('express')
const app = express()
const { Ants } = require('./lib/ants/src/')
const bodyParser = require('body-parser');

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/ants/:id', (req, res, next) =>
  Ants.get(req.params.id)
    .then(ant => res.json(ant))
    .catch(next)
//  return (res.send('Hello World!'))
)

app.get('/ants', (req, res, next) =>
  Ants.list()
    .then(ants => res.json(ants))
    .catch(next)
)

app.post('/ants', (req, res, next) =>
  Ants.create(req.body.ant)
    .then(ant => res.json(ant))
    .catch(next)
)

app.put('/ants/:id', (req, res, next) =>
  Ants.update(req.params.id, req.body.ant)
    .then(ant => res.json(ant))
    .catch(next)
)

app.delete('/ants/:id', (req, res, next) =>
  Ants.delete(req.params.id)
    .then(response => res.json(response))
    .catch(next)
)

app.listen(4000, err => {
  if (err) return console.error(err)
  console.log('Ants app listening on port 4000!')
})

