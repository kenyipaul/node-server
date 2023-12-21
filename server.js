const express = require('express')
const app = express()

const PORT = 3303

app.get('/', function(req, res) {
    res.type('text/html')
    res.send('<h1> HELLO WORLD </h1>')
})

app.use(function(req, res) {
    res.status(404)
    res.type('text/plain')
    res.send('404 - Page Not Found')
})

app.listen(PORT, (err) => {
    if (err) throw err 
    console.log(`Server running on port localhost:${PORT}`)
})