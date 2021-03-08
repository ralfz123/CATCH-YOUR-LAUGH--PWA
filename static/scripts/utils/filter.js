/**
 * Makes new array with needed data variables
 *
 * @param {string} jsonData - Dirty cat data
 * @return {string} jsonData - Clean cat data
 *
 */

function filterCatData(rawCatData) {
  const cleanCatData = rawCatData.map((element) => {
    return {
      id: element.id,
      url: element.url,
    };
  });
  return cleanCatData;
}


/**
 * Makes new object with needed data variables (this is another way to "map" an object, because this data consists of an object)
 *
 * @param {string} jsonData - Dirty joke data
 * @return {string} jsonData - Clean joke data
 *
 */

function filterJokeData(rawJokeData) {
  return {
    id: rawJokeData.id,
    setup: rawJokeData.setup,
    punchline: rawJokeData.punchline,
  };
}

export { filterCatData, filterJokeData };
