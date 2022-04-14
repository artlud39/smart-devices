import Inputmask from 'inputmask';

function setMaskTel() {
  let maskTel = new Inputmask({mask: '+7(999) 999-99-99'});
  maskTel.mask(document.querySelectorAll('[data-phone-pattern]'));
}

export {setMaskTel};
