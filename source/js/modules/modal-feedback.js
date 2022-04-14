const userName = document.querySelector('[data-user-name]');
const openModalButton = document.querySelector('.page-header__info-button');

function setFocus() {
  openModalButton.addEventListener('click', () => {
    setTimeout(function () {
      userName.focus();
    }, 100);
  });
}


export {setFocus};
