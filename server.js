const express = require('express');
const bodyParser = require('body-parser') 
const path = require('path')

const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.send("Hello");
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(PORT);
