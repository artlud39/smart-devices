
const titleNav = document.querySelector('.navigation__title');
const mainNav = document.querySelector('.main-nav');
const navigation = document.querySelector('.navigation');

const titleContacts = document.querySelector('.contacts__title');
const contacts = document.querySelector('.contacts');

function showMenu() {
  titleNav.addEventListener('click', () => {
    if (!mainNav.classList.contains('is-open')) {
      mainNav.classList.add('is-open');
      navigation.classList.add('is-active');
    } else {
      mainNav.classList.remove('is-open');
      navigation.classList.remove('is-active');
    }
  });
}

function showContacts() {
  titleContacts.addEventListener('click', () => {
    if (!contacts.classList.contains('is-open')) {
      contacts.classList.add('is-open');
      contacts.classList.add('is-active');
    } else {
      contacts.classList.remove('is-open');
      contacts.classList.remove('is-active');
    }
  });
}

export {showMenu, showContacts};
