//                            //
// **** IMPORT PACKAGES  **** //
//                            //
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');

const getData = require('./modules/fetch.js');
const { clickLikeBtn, checkDuplicateFav } = require('./modules/like.js');

let favouritesArray = []; // Empty array that will filled with objects through the hit like button

//                             //
// **** MIDDLEWARE SET-UP **** //
//                             //
// Using static files from static directory
app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: true }));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

//                             //
// ******** ROUTING ********** //
//                             //
app.get('/', async (req, res) => {
  // Get data through fetch and put in a variable called dataAll
  const dataAll = await getData();

  // Declare data variables for better use in .ejs files
  const catData = dataAll.filteredDataCat;
  const jokeData = dataAll.filteredDataJokes;

  // Render data
  res.render('index.ejs', { catData, jokeData });
});

// app.post('/fetchData', getButtonData);

// function getButtonData(req, res) {
//   console.log('Function is reached')
//   // res.send({receivedData})
//   // const receivedData = await getData();
//   // console.log(receivedData)
//   // res.setHeader('Content-Type', 'application/json');
//   // res.send({ receivedData });

// }

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
});

app.get('/favourites', function (req, res) {
  res.render('pages/favourites', { favouritesArray });
});

// Checks which object is 'deleted', find in global array and remove (splice)
app.post('/favourites', function (req, res) {});

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

app.listen(process.env.PORT, () => console.log(`App is running on port ${port}`));

// Finds the right object that is equal to the given id parameter
function findObject(id) {
  const correctObject = favouritesArray.find((object) => {
    return object.id == id;
  });
  return correctObject;
}

// NOT WORKING - Making an id, so it can be showed at the detail page
function countFavItem() {
  let count = 0;
  for (var i = count; i <= count; i++) {
    count += 1;
  }
}

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
