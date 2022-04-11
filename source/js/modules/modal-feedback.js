import MaskTel from './maskTel';

const userName = document.querySelector('[data-user-name]');

function setFocus() {
  userName.focus();
  const inputMask = new MaskTel();
}

export {setFocus};
