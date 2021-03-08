import { getData } from '../utils/fetch.js';
import { renderData } from './render.js';

/**
 * A button that fetches and renders the data again
 *
 */

const comboBtn = document.getElementById('comboBtn');
if (comboBtn) {
  comboBtn.addEventListener('click', async function () {
    // Fetches data again
    const receivedData = await getData();
    renderData(receivedData.filteredDataCat, receivedData.filteredDataJoke);
  });
}
