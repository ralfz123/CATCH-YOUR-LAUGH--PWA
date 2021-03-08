// **** IMPORT PACKAGES  **** //

const express = require('express');
const { request } = require('http');
const app = express();
const port = 5000;
const path = require('path');
const endpointOne = 'http://api.thecatapi.com/v1/images/search';
// const endpointTwo = 'http://official-joke-api.appspot.com/jokes/random';

// **** MIDDLEWARE SET-UP **** //

// Using static files from static directory
app.use(express.static('static'));
app.use('/styles', express.static(__dirname + 'static/styles'));
app.use('/scripts', express.static(__dirname + 'static/scripts'));
app.use('/icons', express.static(__dirname + 'static/icons'));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

// **** ROUTING **** //

app.get('/', function (req, res) {
  request(endpointOne, function (error, response, body){
    let data = JSON.parse(body)
    res.render('pages/index', {cat: data});
  })
});

app.get('/', function (req, res) {
  res.render('pages/index');
});

app.get('/favourites', function (req, res) {
  res.render('pages/favourites');
});

app.get('/favourites/:id', function (req, res) {
  res.render('pages/favouriteItem');
});

app.listen(port, () => console.log(`App is running on port ${port}`));
