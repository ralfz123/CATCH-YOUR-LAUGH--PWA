// **** IMPORT PACKAGES  **** //

const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

// **** MIDDLEWARE SET-UP **** //

// Using static files from static directory:
app.use(express.static('static'));
// app.use('/static', express.static('static'));
// app.use('/static', express.static(path.join(__dirname, 'static')));

// Locate ejs (templating) (and views)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// **** ROUTING **** //

app.get('/', function (req, res) {
  // res.render('index.ejs');
  // console.log('home');
  // res.sendFile(path.join(__dirname + '/static/index.html'));
  res.sendFile('index.html'); // vanuit static!
});

app.get('/favourites', function (req, res) {
  console.log('Favourites list');
  res.render('pages/favourites.ejs');
});

app.get('/favourites/:id', function (req, res) {
  console.log('Detailpage');
  res.render('pages/favouriteItem.ejs');
});

app.listen(port, () => console.log(`App is running on port ${port}`));
