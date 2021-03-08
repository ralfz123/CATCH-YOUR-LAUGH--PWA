/**
 * Renders the data on the detail page of the unique favourite item
 *
 * @param {string} dataObject - The data (object) from the unique favourite item
 *
 */

function renderDetail(favItemObject) {
  const numberFavourite = document.querySelector('#fav-item h1');
  const image = document.getElementById('fav-item-image');
  const joke = document.getElementById('fav-item-joke');
  const punchline = document.getElementById('fav-item-punchline');

  numberFavourite.innerHTML = `Favourite #${favItemObject.jokeData.id}`;
  image.src = favItemObject.catData.url;
  joke.innerHTML = favItemObject.jokeData.setup;
  punchline.innerHTML = favItemObject.jokeData.punchline;
}

export { renderDetail };
