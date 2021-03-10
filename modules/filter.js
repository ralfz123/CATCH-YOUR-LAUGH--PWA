/**
 * Makes new array with needed data variables
 *
 * @param {string} jsonData - Dirty cat data
 * @return {string} jsonData - Clean cat data
 *
 */

function filterCatData(rawCatData) {
  return {
    id: rawCatData.data[0].id,
    url: rawCatData.data[0].url,
  };
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
    id: rawJokeData.data.id,
    setup: rawJokeData.data.setup,
    punchline: rawJokeData.data.punchline,
  };
}

module.exports = { filterCatData, filterJokeData };
