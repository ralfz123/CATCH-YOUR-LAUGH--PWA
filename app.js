// **** IMPORT PACKAGES  **** //
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const router = require('./routes/router.js');

// **** MIDDLEWARE SET-UP **** //
// Using static files from static directory
app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: true }));

// Setting views (EJS)
app.set('views', './views');
app.set('view engine', 'ejs');

// **** ROUTING **** //
app.use('/', router);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
