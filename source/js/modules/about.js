

const linkAboutOpened = document.querySelector('.about__button--opened');
const linkAboutClosed = document.querySelector('.about__button--closed');
const aboutText = document.querySelector('.about__inner-text');

function showText() {
  linkAboutOpened.addEventListener('click', ()=> {
    linkAboutOpened.style.display = 'none';
    linkAboutClosed.style.display = 'block';
    if (!aboutText.classList.contains('about__inner-text--opened')) {
      aboutText.classList.add('about__inner-text--opened');
    }
  });
}

function hideText() {
  linkAboutClosed.addEventListener('click', ()=> {
    linkAboutOpened.style.display = 'block';
    linkAboutClosed.style.display = 'none';
    if (aboutText.classList.contains('about__inner-text--opened')) {
      aboutText.classList.remove('about__inner-text--opened');
    }
  });
}

export {showText, hideText};
