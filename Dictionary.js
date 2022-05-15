var express = require("express");
var app = express();

const path = require('path');
const word = require('./word');
const bodyParser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, '/dict.html'));
});

app.get("/searchWord", (req, res) => {
   word(req, res);
});

app.listen(process.env.PORT || 3000)
