/* 
Write a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.

The server should respond to any GET that matches the /books resource path.
As always, the port is passed in process.argv[2]. The file to read is passed
in process.argv[3]. */


const express = require('express'),
      app = express(),
      fs =  require('fs');

app.get('/books', (req, res) => {
    fs.readFile(process.argv[3], 'utf-8', (err, content) => {
        if (err) return res.sendStatus(500)
        res.json(JSON.parse(content));
    })
    
})

app.listen(process.argv[2]);


