import { favouritesArray } from './like.js';
import { renderDetail } from './favDetail.js';

/**
 * Creates a favourite item and renders the data
 *
 * @param {string} data - The array with all the favourites
 *
 */

function renderFavItem(arrayData) {
  let currentContainer = document.querySelector('ol');
  currentContainer.innerHTML = ''; // Make it empty before data will be rendered

  arrayData.forEach((object) => {
    // Creates new <li> in the list
    let newFav = document.createElement('li');
    newFav.setAttribute('class', 'fav-item');

    // Image
    let newCatImg = document.createElement('img');
    newCatImg.src = object.catData.url;
    newFav.appendChild(newCatImg);

    // Joke container
    let jokeContainer = document.createElement('div');
    newFav.appendChild(jokeContainer);

    // Joke
    let newJoke = document.createElement('p');
    newJoke.innerHTML = object.jokeData.setup;
    jokeContainer.appendChild(newJoke);

    // Punchline
    let newJokePunchline = document.createElement('p');
    newJokePunchline.innerHTML = object.jokeData.punchline;
    jokeContainer.appendChild(newJokePunchline);

    // Buttons container
    let btnsContainer = document.createElement('div');
    newFav.appendChild(btnsContainer);

    // Check button to check the fav-item
    let checkBtn = document.createElement('button');
    checkBtn.setAttribute('class', 'checkBtn');
    btnsContainer.appendChild(checkBtn);

    // Delete button to delete the fav-item
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'deleteBtn');
    btnsContainer.appendChild(deleteBtn);

    currentContainer.appendChild(newFav);

    clickDetailFav();
    deleteFavItem();
    deleteAllFavItems();
  });
}

/**
 * When clicking on the button to go to the detail page, the URL changes with a unique ID
 *
 */

function clickDetailFav() {
  let checkFavItemBtns = document.querySelectorAll('.checkBtn');

  for (let i = 0; i < checkFavItemBtns.length; i++) {
    checkFavItemBtns[i].onclick = () => {
      const indexFav = favouritesArray
        .map(function (object) {
          return object.jokeData.id;
        })
        .indexOf(favouritesArray[i].jokeData.id); // What's the purpose of this code?

      location.hash = `favourites/${favouritesArray[indexFav].jokeData.id}`;
      renderDetail(favouritesArray[indexFav]);
    };
  }
}

/**
 * Removes one favourite item from favourites list
 *
 */

function deleteFavItem() {
  let deleteBtns = document.querySelectorAll('.deleteBtn');

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].onclick = () => {
      if (favouritesArray.length >= 1) {
        const indexFav = favouritesArray
          .map(function (object) {
            return object.jokeData.id;
          })
          .indexOf(favouritesArray[i].jokeData.id); // What's the purpose of this code?

        favouritesArray.splice(indexFav, 1);
        renderFavItem(favouritesArray);
      }
    };
  }
}

/**
 * Removes all favourites from favourites list
 *
 */

function deleteAllFavItems() {
  const deleteAllBtn = document.querySelector('.deleteAllBtn');
  deleteAllBtn.onclick = () => {
    let favouritesArray = [];
    renderFavItem(favouritesArray);
  };
}

export { renderFavItem };
