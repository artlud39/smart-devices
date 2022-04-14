import MoveTo from 'moveto';

const moveTo = new MoveTo({
  duration: 1000,
});

const feedbackTarget = document.getElementById('feedback');
const linkFeedback = document.querySelector('a[href="#feedback"]');
const target = document.getElementById('target');

moveTo.move(target);

function scrollSmooth() {
  linkFeedback.addEventListener('click', (evt) => {
    evt.preventDefault();
    moveTo.move(feedbackTarget);
  });
}
export {scrollSmooth};
