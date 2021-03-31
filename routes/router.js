const express = require('express');
const router = express.Router();
const render = require('../render/render.js');

router
  .get('/', render.getHome)
  .post('/', render.likeCombo)
  .post('/another', render.anotherFetch)
  .get('/favourites', render.getFavourites)
  .post('/favourites', render.deleteFavouriteItem)
  .get('/favourites/:id', render.getFavouriteItem)
  .post('/favourites/deleteAll', render.deleteAllFavourites)
  .get('/error', render.getError)
  .get('/offline', render.getOffline);

module.exports = router;
