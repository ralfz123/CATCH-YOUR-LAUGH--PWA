/**
 * Feedback from the 'like' to the user
 *
 */

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

export { feedbackLike };
