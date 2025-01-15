require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/next',(req, res) => {
    res.send("App is working")
})

app.get('/login',(req, res) => {
    res.send(" Hello Robin")
})

app.get('/Enter',(req, res) => {
    res.send("<h1>Hello Sir<h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
