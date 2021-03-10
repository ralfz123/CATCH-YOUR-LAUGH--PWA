// **** IMPORT PACKAGES  **** //

const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const bodyParser = require('body-parser');

const getData = require('./modules/fetch.js');
const urlCats = 'http://api.thecatapi.com/v1/images/search';
const urlJokes = 'http://official-joke-api.appspot.com/jokes/random';
const { filterCatData, filterJokeData } = require('./modules/filter.js');
const { likeItem, checkDuplicateFav } = require('./modules/like.js');
// const { clickLikeBtn } = require('./static/scripts/modules/like');

let favouritesArray = [];

// **** MIDDLEWARE SET-UP **** //

// Using static files from static directory
app.use(express.static('static'));
app.use('/styles', express.static(__dirname + 'static/styles'));
app.use('/scripts', express.static(__dirname + 'static/scripts'));
app.use('/icons', express.static(__dirname + 'static/icons'));

// app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

// **** ROUTING **** //

app.get('/', async (req, res) => {
  // Get data
  const dataCat = await getData(urlCats);
  const dataJokes = await getData(urlJokes);

  // Filter data
  const filteredDataCat = filterCatData(dataCat);
  const filteredDataJokes = filterJokeData(dataJokes);
  // clickLikeBtn();

  // Render data
  res.render('index.ejs', { filteredDataCat, filteredDataJokes });
});

app.post('/', function (req, res) {
  const favData = {
    // id: countFavItem(),
    cat: req.body.cat,
    id: req.body.id,
    setup: req.body.joke,
    punchline: req.body.punchline,
  };

  favouritesArray.push(favData);
  // checkDuplicateFav(favouritesArray); // Has to be activated
  checkDuplicateFavItems();
  console.log('favArray:', favouritesArray);
});

// NOT WORKING - Making an id, so it can be showed at the detail page
function countFavItem() {
  let count = 0;
  for (var i = count; i <= count; i++) {
    count += 1;
  }
  console.log(count);
}

// Checks if the liked combo is not a duplicate, then it won't be saved in the favourites list
function checkDuplicateFavItems() {
  const newArray = favouritesArray.reduce((newArray, currentValue) => {
    if (!newArray.some((element) => element.id === currentValue.id))
      newArray.push(currentValue);
    return newArray;
  }, []);
  favouritesArray = newArray;
}

app.get('/favourites', function (req, res) {
  res.render('pages/favourites', { favouritesArray });
});

app.get('/favourites/:id', function (req, res) {
  // Search id in array
  const favData = findObject(req.params.id);
  if (favData) {
    // Show correct id object from array
    res.render('pages/favouriteItem', { favData });
  } else {
    res.redirect('/error');
  }
});

app.get('/error', function (req, res) {
  res.render('404.ejs');
});

// Finds the right object that is equal to the given id parameter
function findObject(id) {
  const correctObject = favouritesArray.find((object) => {
    return object.id == id;
  });
  return correctObject;
}

app.listen(port, () => console.log(`App is running on port ${port}`));
