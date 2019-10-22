const express = require('express')
var path = require('path');

const app = express()
const port = 8080;



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/static', express.static(path.join(__dirname, 'public'))) //sciezka static ma zawartosc folderu public


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/get', function (req, res) {
    res.send('Hello World TestGet!')
})

app.post('/post', function (req, res) {
    res.send('Hello World TestPost!')
})