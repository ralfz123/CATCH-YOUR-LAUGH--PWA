import { getData } from './utils/fetch.js';
import { renderData } from './modules/render.js';
import { checkFavsBtn } from './accesFavs.js';

// checkFavsBtn()

/**
 * IIFE Function that starts the app, within all feature-functions
 *
 */

// (async function init() {
// Get data through fetch and put in a variable called receivedData
// const receivedData = await getData();
// Render that data
// renderData(receivedData.filteredDataCat, receivedData.filteredDataJoke);
// })();

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../service-worker.js');
// }

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     navigator.serviceWorker
//       .register('../service-worker.js')
//       .then(function (registration) {
//         return registration.update();
//       });
//   });
// }
