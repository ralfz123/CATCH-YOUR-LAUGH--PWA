// **** IMPORT PACKAGES  **** //

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');

const getData = require('./modules/utils/fetch.js');
const { clickLikeBtn, checkDuplicateFav } = require('./modules/like.js');
const findObject = require('./modules/utils/findObject.js');
// const checkFavsBtn = require('.')

let favouritesArray = require('./modules/data.js');

// **** MIDDLEWARE SET-UP **** //
// Using static files from static directory
app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: true }));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

// ******** ROUTING ********** //
app.get('/', async function (req, res) {
  // Get data through fetch and put in a variable called dataAll
  const dataAll = await getData();

  // Declare data variables for better use in .ejs files
  const catData = dataAll.filteredDataCat;
  const jokeData = dataAll.filteredDataJokes;

  // Render data
  res.render('index.ejs', { catData, jokeData });
});

app.post('/', function (req, res) {
  const favData = {
    cat: req.body.cat,
    id: req.body.id,
    setup: req.body.joke,
    punchline: req.body.punchline,
  };

  favouritesArray.push(favData);
  // checkDuplicateFav(favouritesArray); // Has to be activated
  checkDuplicateFavItems();
  // checkFavsBtn();
});

// Fetch another combo
app.post('/anotherCombo', async function (req, res) {
  // Get data through fetch and put in a variable called dataAll
  const dataAll = await getData();

  // Declare data variables for better use in .ejs files
  const catData = dataAll.filteredDataCat;
  const jokeData = dataAll.filteredDataJokes;

  // Render data
  res.render('index.ejs', { catData, jokeData });
});

app.get('/favourites', function (req, res) {
  res.render('pages/favourites', { favouritesArray });
});

// Checks which object is 'deleted', find in global array and remove (splice)
app.post('/favourites', function (req, res) {});

app.get('/favourites/:id', function (req, res) {
  // Search id in array
  const favData = findObject(req.params.id, favouritesArray);
  if (favData) {
    // Show correct id object from array
    res.render('pages/favouriteItem', { favData });
  } else {
    res.redirect('/error');
  }
});

// Error handler
// app.use(function (req, res, next) {
//   res.status(404);

//   // respond with html page
//   if (req.accepts('html')) {
//     res.render('404.ejs', { url: req.url });
//     return;
//   }

//   // respond with json
//   if (req.accepts('json')) {
//     res.send({ error: 'Not found' });
//     return;
//   }

//   // default to plain-text. send()
//   res.type('txt').send('Not found');
// });

// Page that doesn't exist
app.get('/*', function (req, res) {
  res.render('404.ejs');
});

// Error page
app.get('/error', function (req, res) {
  res.render('404.ejs');
});

// Offline page
app.get('/offline', function (req, res) {
  res.render('offline.ejs');
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

// Checks if the liked combo is not a duplicate, then it won't be saved in the favourites list
function checkDuplicateFavItems() {
  const newArray = favouritesArray.reduce((newArray, currentValue) => {
    if (!newArray.some((element) => element.id === currentValue.id))
      newArray.push(currentValue);
    return newArray;
  }, []);
  favouritesArray = newArray;

  //   const correctObject = favouritesArray.find((object) => {
  //     console.log(id)
  //     if (object.id == id) {
  //       console.log('the same')

  //     }
  //     // return object.id == id;
  //   });
  //   return correctObject;
}
