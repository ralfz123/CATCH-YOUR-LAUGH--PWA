/**
 * Loader as feedback element for the user (UX)
 *
 * @param {string} state - The state of the loader
 */

function loader(state) {
  const loader = document.querySelector('.loader');

  loader.classList = 'loader';
  if (state == 'show') {
    loader.classList = 'loader';
  } else if (state == 'hide') {
    loader.classList.add('hide');
  }
}
export { loader };
