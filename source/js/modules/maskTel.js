import Inputmask from 'inputmask';

class MaskTel {
  constructor() {
    this.inputTels = document.querySelectorAll('[data-phone-pattern]');
    this.addEvents();
  }

  addEvents() {
    let telInput = new Inputmask({
      'mask': '+7(999) 999-99-99',
    }).mask(this.inputTels);
  }
}

export default MaskTel;
