import IMask from './imask.min.js';
import { openModal } from './modal.js'; // функция для открытия модальных окон

/*
* Обработка ввода номера в поля формы
*/
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const elements = document.querySelectorAll('input[type="tel"]');
elements.forEach(e => {
  IMask(e, maskOptions);
})

/*
* Обработка формы и отправка в Битрикс24
*/
const url = 'https://script.google.com/macros/s/AKfycbxBhNUXWfZeHwvHBBigeFt4JDEcYGP7gYEanmmSwV975M65miHxweR3ABNQ50KxtrGu/exec';

const forms = document.querySelectorAll('form')
forms.forEach(el => {
  el.addEventListener('submit', async (e) => {
    e.preventDefault();

    const input = e.target.elements[0];
    const btn = e.target.elements[1];

    // validation
    if (!input.value.length || input.value.length < 16) {
      console.log('Ошибка валидации формы');
      return
    }

    const dataForm = {
      phone: input.value,
      placeholder: input.placeholder,
      btn: btn.textContent
    }

    btn.textContent = 'Отправка...';
    btn.disabled = true;

    sendForm(dataForm)
      .then((d) => {
        ym(88639713,'reachGoal','submitForm');

        if(dataForm.btn != 'Скачать прайс-лист') {
          window.location.href = "https://crm.avirent.ru/company/register";
        } else {
          openModal(3) // открываем модальное окно, если запросили прайс
        }
        btn.textContent = dataForm.btn;
        btn.disabled = false;
      })
      .catch(er => alert('Ошибка отправки данных\n' + er))
  })
})

async function sendForm(data) {
  const res = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return res
}