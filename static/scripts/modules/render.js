import { clickLikeBtn } from './like.js';

/**
 * Renders the data (cat images & jokes) in the HTML
 *
 * @param {string} catData - All cat data
 * @param {string} jokeData - All joke data
 *
 */

function renderData(catData, jokeData) {
  const image = document.getElementById('image-cat');
  const joke = document.getElementById('joke');
  const punchline = document.getElementById('punchline');

  image.src = catData[0].url;
  joke.innerHTML = jokeData.setup;
  punchline.innerHTML = jokeData.punchline;

  clickLikeBtn(catData, jokeData);
}

export { renderData };
