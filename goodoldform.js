/* Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and responds with the value of str backwards. */


const express = require('express'),
      app = express(),
      parser = require('body-parser');


app.use(parser.urlencoded({ extended: false }));

app.post('/form', (req, res) =>{
    res.end(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2]);