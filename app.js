// **** IMPORT PACKAGES  **** //

const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const getData = require('./modules/fetch.js');
const urlCats = 'http://api.thecatapi.com/v1/images/search';
const urlJokes = 'http://official-joke-api.appspot.com/jokes/random';
const { filterCatData, filterJokeData } = require('./modules/filter.js');

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

app.get('/', async (req, res) => {
  // loader feedback here

  // Get data
  const dataCat = await getData(urlCats);
  const dataJokes = await getData(urlJokes);
  const filteredDataCat = filterCatData(dataCat);
  const filteredDataJokes = filterJokeData(dataJokes);
  console.log('filtered cat', filteredDataCat);
  console.log('filtered joke', filteredDataJokes);

  res.render('index.ejs', { filteredDataCat, filteredDataJokes });
});

app.get('/favourites', function (req, res) {
  res.render('pages/favourites'); // with favouritesArray data
});

app.get('/favourites/:id', function (req, res) {
  res.render('pages/favouriteItem');
});

app.listen(port, () => console.log(`App is running on port ${port}`));
