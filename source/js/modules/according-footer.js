const titleNav = document.querySelector('.navigation__title');
const mainNav = document.querySelector('.main-nav');
const navigation = document.querySelector('.navigation');

const titleContacts = document.querySelector('.contacts__title');
const contacts = document.querySelector('.contacts');

function showMenu() {
  navigation.classList.remove('navigation--no-js');

  titleNav.addEventListener('click', () => {
    if (!mainNav.classList.contains('is-open')) {
      mainNav.classList.add('is-open');
      navigation.classList.add('is-active');
      contacts.classList.remove('is-open');
      contacts.classList.remove('is-active');
    } else {
      mainNav.classList.remove('is-open');
      navigation.classList.remove('is-active');
    }
  });
}

function showContacts() {
  contacts.classList.remove('contacts--no-js');

  titleContacts.addEventListener('click', () => {
    if (!contacts.classList.contains('is-open')) {
      contacts.classList.add('is-open');
      contacts.classList.add('is-active');
      mainNav.classList.remove('is-open');
      navigation.classList.remove('is-active');
    } else {
      contacts.classList.remove('is-open');
      contacts.classList.remove('is-active');
    }
  });
}

export {showMenu, showContacts};
