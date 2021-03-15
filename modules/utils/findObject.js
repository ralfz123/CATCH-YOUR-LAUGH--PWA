// Finds the right object that is equal to the given id parameter
function findObject(id, favouritesArray) {
  const correctObject = favouritesArray.find((object) => {
    console.log(favouritesArray);
    return object.id == id;
  });
  return correctObject;
}

module.exports = findObject;
