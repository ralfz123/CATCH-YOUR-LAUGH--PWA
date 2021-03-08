// import '../vendor/routie.js';

// /**
//  * Handle the routes of all 'pages'
//  *
//  */

// function routeHandler() {
//   routie({
//     '': function () {
//       sectionToggler('combo-generator');
//     },
//     favourites: function () {
//       sectionToggler('favourites');
//     },
//     'favourites/:id': function () {
//       sectionToggler('fav-item');
//     },
//     // 'favourites/:id': function (id) {
//     //   console.log(id);
//     //   sectionToggler(id)
//     //   addSection(id);
//     //   toggle(id);
//     //   const filtered = filterPlayers(playerData, id);
//     //   renderPlayerData(filtered);
//     // },
//   });
// }

// function addSection(id) {
//   const teamSection = document.querySelector("ol");
//   teamSection.classList = "";
//   teamSection.classList.add(id);
// }

/**
 * Manages which pages will be displayed
 *
 * @param {string} page - Current page that has to be displayed
 *
 */

function sectionToggler(page) {
  const allSections = document.querySelectorAll('section');
  const activeSection = document.getElementById(`${page}`);

  allSections.forEach((section) => {
    section.classList.remove('active');
    section.setAttribute('aria-hidden', 'true');
    section.hidden = true;
  });

  activeSection.classList.add('active');
  activeSection.setAttribute('aria-hidden', 'false');
  activeSection.hidden = false;
}

export { routeHandler };
