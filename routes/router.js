// import express from 'express';
// import getData from '../utils/fetch.js';
// import findObject from '../utils/findObject.js';

const express = require('express');
const router = express.Router();
const render = require('../render/render.js');

// const getData = require('../modules/utils/fetch.js');

// let favouritesArray = require('../modules/data.js');
// const findObject = require('../modules/utils/findObject.js');
// const { clickLikeBtn, checkDuplicateFav } = require('../modules/like.js');

// ******** ROUTING ********** //

router
  .get('/', render.getHome)
  .post('/', render.likeCombo)
  .post('/anotherCombo', render.anotherFetch)
  .get('/favourites', render.getFavourites)
  .get('/favourites/:id', render.getFavouriteItem)
  .get('/*', render.get404)
  .get('/error', render.getError)
  .get('/offline', render.getOffline);

module.exports = router;
