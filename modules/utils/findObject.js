// Finds the right object index that is equal to the given id parameter
function findObjectIndex(id, favouritesArray) {
  const correctObject = favouritesArray.find((object) => {
    return object.id == id;
  });
  const index = favouritesArray.indexOf(correctObject);

  return index;
}

// Finds the right object that is equal to the given id parameter
function findObject(id, favouritesArray) {
  const correctObject = favouritesArray.find((object) => {
    return object.id == id;
  });
  return correctObject;
}

module.exports = { findObjectIndex, findObject };
