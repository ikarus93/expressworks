/* Write a route that extracts data from the query string in the GET /search URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format. */


const express = require('express'),
      app = express();

app.get('/search', (req, res) => {
    let json = {};
    for (let key in req.query) {
        json[key] = req.query[key];
    }
    
    res.send(JSON.stringify(json));
})

app.listen(process.argv[2]);