const compression = require('compression')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(compression())
app.use(express.static('public'))

app.use((req, res, next) => {
  res.status(404).send('Sorry, we cannot find that!')
})

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!')
})

app.listen(port)
