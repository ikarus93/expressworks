/* Create an Express.js server that processes PUT /message/:id requests
and produces a SHA-1 hash of the current date combined with the ID from the URL. */

const express = require('express'),
      app = express(),
      path = require('path');
      

app.put('/message/:ID', (req, res) => {
    let hash = require('crypto').createHash('sha1').update(new Date().toDateString() + req.params.ID).digest('hex');
    res.send(hash);
})

app.listen(process.argv[2]);