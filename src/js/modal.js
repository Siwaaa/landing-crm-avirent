/**
 * 
 * Для добавления тригера открытия модального окна на кнопку 
 * следует добавить data-атрибут к html элементу с номером модального окна. 
 * Например: data-open-modal_1
 *
 *  */ 
const modals = [
  document.getElementById('modal1'), // попап ухода с сайта
  document.getElementById('modal2'), // Оставьте номер, мы перезвоним
  document.getElementById('modal3'), // Спасибо, скоро вышлем прайс
  document.getElementById('modal4') // Видео
]

const triggersForModal_1 = document.querySelectorAll("[data-open-modal_1]")
triggersForModal_1.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modals[0].style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_2 = document.querySelectorAll("[data-open-modal_2]")
triggersForModal_2.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modals[1].style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_3 = document.querySelectorAll("[data-open-modal_3]")
triggersForModal_3.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modals[2].style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_4 = document.querySelectorAll("[data-open-modal_4]")
triggersForModal_4.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modals[3].style.display = "block";
    document.body.style.overflow = 'hidden';
    modals[3].querySelector('.iframe').insertAdjacentHTML(
      'beforeend',
      `<iframe height="560" src="https://www.youtube.com/embed/Xj6pj12ywN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    )
  })
})

// функция открытия попапа 
export function openModal(numberModal) {
  modals[numberModal - 1].style.display = "block";
  document.body.style.overflow = 'hidden';
}
// попап выхода с сайта
const byebye = (event) => {
  if (!event.toElement && !event.relatedTarget && event.offsetY < 1) {
    setTimeout(() => {
      openModal(1);
      document.removeEventListener("mouseleave", byebye);
    }, 500);
  }
}
document.addEventListener("mouseleave", byebye);



// Закрываем окна, когда нажатие происходит вне их области
window.onclick = function(event) {
  switch (event.target) {
    case modals[0]:
      modals[0].style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modals[1]:
      modals[1].style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modals[2]:
      modals[2].style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modals[3]:
      modals[3].style.display = "none";
      document.body.style.overflow = "visible"
      // stop video 
      // const video = document.getElementById('about_video')
      // const src = video.src;
      // video.src = src;
      modals[3].querySelector('iframe').remove()
      break;
    default:
      break;
  }
}