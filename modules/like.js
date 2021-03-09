module.exports = {
  // favouritesArray:  [], // Empty array for keeping up the favourites data

  /**
   * Makes a new item (data object) in the favourites-list
   *
   * @param {string} catData - All cat data
   * @param {string} jokeData - All joke data
   *
   */

  // likeItem: function likeItem(catData, jokeData) {
  //   let object = { catData: catData, jokeData: jokeData };
  //   favouritesArray.push(object);
  //   // checkDuplicateFav();
  //   // renderFavItem(favouritesArray);
  // },

  /**
   * Checks if the liked combo is not a duplicate, then it won't be saved in the favourites list
   *
   */

  checkDuplicateFav: function checkDuplicateFav(favouritesArray) {
    const newArray = favouritesArray.reduce((newArray, currentValue) => {
      if (!newArray.some((element) => element.id === currentValue.id))
        newArray.push(currentValue);
      return newArray;
    }, []);
    favouritesArray = newArray;
  },
};
