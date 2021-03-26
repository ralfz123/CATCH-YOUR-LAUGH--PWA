const express = require('express');
const router = express.Router();
const render = require('../render/render.js');

router
  .get('/', render.getHome)
  .post('/', render.likeCombo)
  .get('/another', render.anotherFetch)
  .get('/favourites', render.getFavourites)
  .post('/favourites', render.deleteFavouriteItem)
  .get('/favourites/:id', render.getFavouriteItem)
  .post('/favourites/deleteAll', render.deleteAllFavourites)
  .get('/error', render.getError)
  .get('/offline', render.getOffline);
  // .get('/*', render.get404)

module.exports = router;
