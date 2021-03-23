const express = require('express');
const router = express.Router();
const render = require('../render/render.js');

router
  .get('/', render.getHome)
  .post('/', render.likeCombo)
  .post('/anotherCombo', render.anotherFetch)
  .get('/favourites', render.getFavourites)
  .get('/favourites/:id', render.getFavouriteItem)
  // .get('/*', render.get404)
  .get('/error', render.getError)
  .get('/offline', render.getOffline);

module.exports = router;
