// import { clickLikeBtn } from './modules/like.js';

clickLikeBtn();
function clickLikeBtn() {
  const likeBtn = document.getElementById('likeBtn');
  if (likeBtn) {
    likeBtn.addEventListener('click', function () {
      feedbackLike(); // UX Feedback from the 'like'
    });
  }
}

function feedbackLike() {
  let feedbackLike = document.createElement('p');
  feedbackLike.setAttribute('class', 'feedback-like');
  let newContent = document.createTextNode('❤️');
  feedbackLike.appendChild(newContent);
  let container = document.getElementById('like-area');
  container.appendChild(feedbackLike);

  // Removes HTML feedback element that is made up here
  setTimeout(function () {
    feedbackLike.remove();
  }, 1500);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('../assets/service-worker.js')
      .then(function (registration) {
        return registration.update();
      });
  });
}
