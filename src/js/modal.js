/**
 * 
 * Для добавления прослушки события клика на кнопках 
 * следует добавить data-атрибут к html элементу с номером модального окна. 
 * Например: data-open-modal_1
 *
 *  */ 

const modal_1 = document.getElementById('modal1') //
const modal_2 = document.getElementById('modal2') // Оставьте номер, мы перезвоним
const modal_3 = document.getElementById('modal3') // Спасибо, скоро перезвоним
const modal_4 = document.getElementById('modal4') // Видео

const triggersForModal_1 = document.querySelectorAll("[data-open-modal_1]")
triggersForModal_1.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modal_1.style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_2 = document.querySelectorAll("[data-open-modal_2]")
triggersForModal_2.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modal_2.style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_3 = document.querySelectorAll("[data-open-modal_3]")
triggersForModal_3.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modal_3.style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_4 = document.querySelectorAll("[data-open-modal_4]")
triggersForModal_4.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modal_4.style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})



// Закрываем окна, когда нажатие происходит вне их области
window.onclick = function(event) {
  switch (event.target) {
    case modal_1:
      modal_1.style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modal_2:
      modal2.style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modal_3:
      modal3.style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modal_4:
      modal4.style.display = "none";
      document.body.style.overflow = "visible"
      // stop video 
      const video = document.getElementById('about_video')
      const src = video.src;
      video.src = src;
      break;
    default:
      break;
  }
}