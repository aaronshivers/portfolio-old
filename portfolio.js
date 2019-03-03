const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.render('index')
// })

app.use((req, res, next) => {
  res.status(404).send('Sorry, we cannot find that!')
})

app.use((err, req, res, next) => {
  res.status(500).send('Something broke!')
})

app.listen(port)
