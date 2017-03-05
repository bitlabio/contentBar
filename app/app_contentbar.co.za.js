console.log("CONTENTBAR APP LOADING")

//var config      = require('./config.json')
var express = require('express');
var app = express();

app.use('/', express.static(__dirname+'/public')); //index.html default

app.get('/concepts', (req, res) => { res.sendFile(__dirname+'/public/concepts.html');  })
app.get('/audience', (req, res) => { res.sendFile(__dirname+'/public/audience.html');  })
app.get('/photobooth', (req, res) => { res.sendFile(__dirname+'/public/photobooth.html');  })
app.get('/clipaisle', (req, res) => { res.sendFile(__dirname+'/public/clipaisle.html');  })
app.get('/studio', (req, res) => { res.sendFile(__dirname+'/public/studio.html');  })
app.get('/work', (req, res) => { res.sendFile(__dirname+'/public/work.html');  })
app.get('/contact', (req, res) => { res.sendFile(__dirname+'/public/contact.html');  })

module.exports = app; // IF NOT EXTERNALLY LOADED YOU NEED TO DO: app.listen(80);