const express = require("express")
const dotenv = require("dotenv")
const app = express()
const port=3000



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  })

app.post('/', (req, res) => {
    res.send('Got a POST request')
  })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})