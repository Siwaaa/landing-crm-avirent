// fixed header
document.addEventListener('DOMContentLoaded', () => {
  const onScrollHeader = () => {
    const header = document.querySelector('.header__nav')
    let prevScroll = window.pageYOffset // на сколько была прокручена страница ранее
    let currentScroll // на сколько прокручена страница сейчас

    window.addEventListener('scroll', () => {
      currentScroll = window.pageYOffset

      const headerHidden = () => header.classList.contains('header__nav-fixed') // узнаем скрыт header или нет

      if (currentScroll > 100 && currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт, при этом не трогаем header если мы вверху окна
        header.classList.add('header__nav-fixed') // то скрываем header
      }
      if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
        header.classList.remove('header__nav-fixed') // то отображаем header
      }

      prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
    })
  }
  onScrollHeader()
});

// BURGER OM-NOM-NOM
const burgerBtn = document.querySelector('#burger')
const navbarMenu = document.querySelector('.navpanel__menu')

burgerBtn.addEventListener('change', function () {
  if (this.checked) {
    navbarMenu.style.height = '400px'
  } else {
    navbarMenu.style.height = '0'
  }
})

// скрываем menu при клике на ссылку-навигацию-якорь
const linksNavMobile = document.querySelectorAll('.navpanel-link')

linksNavMobile.forEach((el) => {
  el.addEventListener('click', () => {
    burgerBtn.checked = false
    navbarMenu.style.height = '0'
  })
})