let favouritesArray = require('../modules/data.js');
const getData = require('../modules/utils/fetch.js');
const findObject = require('../modules/utils/findObject.js');
const { clickLikeBtn, checkDuplicateFav } = require('../modules/like.js');
const url = require('url'); // built-in utility

async function getHome(req, res) {
  // Get data through fetch and put in a variable called dataAll
  const dataAll = await getData();

  // Declare data variables for better use in .ejs files
  const catData = dataAll.filteredDataCat;
  const jokeData = dataAll.filteredDataJokes;

  // Render data
  res.render('index.ejs', { catData, jokeData });
}

function likeCombo(req, res) {
  const favData = {
    cat: req.body.cat,
    id: req.body.id,
    setup: req.body.joke,
    punchline: req.body.punchline,
  };

  favouritesArray.push(favData);
  // checkDuplicateFav(favouritesArray); // Has to be activated
  checkDuplicateFavItems();
}

// Redirects to the home page
async function anotherFetch(req, res) {
  res.redirect(req.originalUrl.split('another?').shift());
}

function getFavourites(req, res) {
  res.render('pages/favourites', { favouritesArray });
}

// Checks which object is 'deleted', find in global array and remove (splice)
function deleteFavouriteItem(req, res) {
  const dataObject = {
    cat: req.body.cat,
    setup: req.body.setup,
    punchline: req.body.punchline,
    id: req.body.id,
  };

  const favDataIndex = findObject(dataObject.id, favouritesArray);
  console.log('index', favDataIndex);

  if (favDataIndex >= 0) {
    favouritesArray = filterArray(favouritesArray, favDataIndex);

    // Filters out the given objectIndex and returns the filtered array
    function filterArray(array, objectIndex) {
      array.splice(objectIndex, 1);
      return array;
    }

    res.render('pages/favourites', { favouritesArray });
  } else {
    console.log('Index not found');
    res.redirect('/error');
  }
}

function getFavouriteItem(req, res) {
  // Search id in array
  const favData = findObject(req.params.id, favouritesArray);
  if (favData) {
    // Show correct id object from array
    res.render('pages/favouriteItem', { favData });
  } else {
    // res.redirect('/error');
  }
}

// Deletes all favourites
function deleteAllFavourites(req, res) {
  favouritesArray = []; // empty global array
  res.redirect('/favourites');
}

// Error handler
// router.use(function (req, res, next) {
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
function get404(req, res) {
  res.render('404.ejs');
}

// Error page
function getError(req, res) {
  res.render('404.ejs');
}

// Offline page
function getOffline(req, res) {
  res.render('offline.ejs');
}

// router.listen(PORT, () => console.log(`App is running on port ${PORT}`));

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

module.exports = {
  getHome,
  likeCombo,
  anotherFetch,
  getFavourites,
  deleteFavouriteItem,
  getFavouriteItem,
  deleteAllFavourites,
  get404,
  getError,
  getOffline,
};
