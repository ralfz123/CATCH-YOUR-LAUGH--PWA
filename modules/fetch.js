const fetch = require('node-fetch');
let loader = require('../static/scripts/utils/loader.js');

async function fetchData(url) {
  //   loader('show'); // Feedback to user while fetching data
  const dataResponse = await fetch(url);
  const jsonData = await dataResponse.json();
  //   loader('hide'); // Feedback to user while fetching data
  return jsonData;
}

module.exports = async function getData(url) {
  //   const likeBtn = document.getElementById('likeBtn');
  //   if (likeBtn) {
  //     likeBtn.setAttribute('disabled', true); // Set button to disabled, so that you're not able to like the unfetched data
  //   }
  //   const comboBtn = document.getElementById('comboBtn');
  //   if (comboBtn) {
  //     comboBtn.setAttribute('disabled', true); // Set button to disabled, so that you're not able to see other unfetched data
  //   }

  const data = await fetchData(url);

  //   likeBtn.removeAttribute('disabled', true); // Data is fetched, so now the like button is enabled
  //   comboBtn.removeAttribute('disabled', true); // Data is fetched, so now the combo button is enabled

  return { data };
};
