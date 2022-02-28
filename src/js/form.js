import IMask from './imask.min.js';

const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const elements = document.querySelectorAll('input[type="tel"]');
elements.forEach(e => {
  IMask(e, maskOptions);
})