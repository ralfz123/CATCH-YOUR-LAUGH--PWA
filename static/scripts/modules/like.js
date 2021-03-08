import { renderFavItem } from './favItem.js';
import { feedbackLike } from '../utils/feedback.js';

let favouritesArray = []; // Empty array for keeping up the favourites data

/**
 * Like-button invokes another function
 *
 * @param {string} catData - All cat data
 * @param {string} jokeData - All joke data
 *
 */

function clickLikeBtn(catData, jokeData) {
  const likeBtn = document.getElementById('likeBtn');
  likeBtn.onclick = () => likeItem(catData, jokeData);
}


/**
 * Makes a new item (data object) in the favourites-list
 *
 * @param {string} catData - All cat data
 * @param {string} jokeData - All joke data
 *
 */

function likeItem(catData, jokeData) {
  let object = { catData: catData[0], jokeData: jokeData };
  favouritesArray.push(object);
  checkDuplicateFav();
  renderFavItem(favouritesArray);
  feedbackLike(); // UX Feedback from the 'like'
}

/**
 * Checks if the liked combo is not a duplicate, then it won't be saved in the favourites list
 *
 */

function checkDuplicateFav() {
  const newArray = favouritesArray.reduce((newArray, currentValue) => {
    if (
      !newArray.some(
        (element) => element.catData.url === currentValue.catData.url
      )
    )
      newArray.push(currentValue);
    return newArray;
  }, []);
  favouritesArray = newArray;
}

export { favouritesArray, clickLikeBtn };
