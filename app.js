// **** IMPORT PACKAGES  **** //

const express = require('express');
// const request = require('request');
const fetch = require('node-fetch');
const app = express();
const port = 5000;
const path = require('path');
const endpointOne = 'http://api.thecatapi.com/v1/images/search';
const endpointTwo = 'http://official-joke-api.appspot.com/jokes/random';

// **** MIDDLEWARE SET-UP **** //

// Using static files from static directory
app.use(express.static('static'));
app.use('/styles', express.static(__dirname + 'static/styles'));
app.use('/scripts', express.static(__dirname + 'static/scripts'));
app.use('/icons', express.static(__dirname + 'static/icons'));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

// **** ROUTING **** // smart solution: https://stackoverflow.com/a/42331138

// app.get('/', function (req, res) {
//   request(endpointOne, function (error, response, body) {
//     let catData = JSON.parse(body);
//     res.render('pages/index.ejs', { catData: catData });
//   });
//   // request(endpointTwo, function (error, response, body){
//   //   let jokeData = JSON.parse(body)
//   //   res.render('pages/index', {jokeData: jokeData});
//   //   console.log(jokeData)
//   // })
// });

app.get('/', async (req, res) => {
  // loader feedback
  const dataCat = await fetchData(endpointOne);
  const dataJokes = await fetchData(endpointTwo);
  res.render('pages/index.ejs', { dataCat, dataJokes });
});

app.get('/favourites', function (req, res) {
  res.render('pages/favourites'); // with favouritesArray data
});

app.get('/favourites/:id', function (req, res) {
  res.render('pages/favouriteItem');
});

async function fetchData(url) {
  const dataResponse = await fetch(url);
  const jsonData = await dataResponse.json();
  return jsonData;
}

app.listen(port, () => console.log(`App is running on port ${port}`));
