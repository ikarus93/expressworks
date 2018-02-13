/* Create an Express.js app with a home page rendered by the Pug template engine.

The home page should respond to /home.

The view should show the current date using 'new Date().toDateString()'.
*/



const express = require('express'),
      app = express(),
      path = require('path');

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2]);

