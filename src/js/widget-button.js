const htmlWidget = `
  <div class="messenger">
    <div title="Чат с менеджером" class="messenger-btn">
      <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H17.3049L20.2076 21.7707C20.6079 22.2907 21.3921 22.2907 21.7924 21.7707L24.6951 18H27C28.6569 18 30 16.6569 30 15V3C30 1.34315 28.6569 0 27 0H3Z" fill="white"/>
        <circle cx="5.10117" cy="9.9" r="0.9" fill="#F49A12"/>
        <circle cx="9.9" cy="9.9" r="0.9" fill="#F49A12"/>
        <circle cx="14.7008" cy="9.9" r="0.9" fill="#F49A12"/>
        <circle cx="19.4996" cy="9.9" r="0.9" fill="#F49A12"/>
        <circle cx="24.2994" cy="9.9" r="0.9" fill="#F49A12"/>
      </svg>
    </div>
    <div id="messenger-links" class="messenger-links">
      <a title="Whatsapp" href="https://wa.me/79206502116" target="_blank"><img src="https://volgo-prime.ru/img/icons/whatsapp-icon.svg" alt="Whatsapp" /></a>
      <a title="Viber" href="https://viber.click/79026681880" target="_blank"><img src="https://volgo-prime.ru/img/icons/viber-icon.svg" alt="Viber" /></a>
      <a title="Telegram" href="https://t.me/fastlem" target="_blank"><img src="https://volgo-prime.ru/img/icons/telegram-icon.svg" alt="Telegram" /></a>
    </div>
  </div>`

const cssWidget = `
.messenger {
  display: block;
  position: fixed;
  right: 3%;
  bottom: 3%;
  width: 60px;
  height: 202px;
  z-index: 9999;
}
.messenger-btn {
  padding: 14px;
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: var(--color-orange);
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  z-index: 999;
  animation: pulse 2s infinite;
}
.messenger-btn:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -webkit-box-shadow: 0 0 0 25px rgba(204,169,44, 0);
  }
  100% {
      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 25px rgba(204,169,44, 0);
      box-shadow: 0 0 0 25px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
.messenger-btn svg {
  width: 32px;
  height: 32px;
}
.messenger-links {
  position: absolute;
  width: 100%;
  transform: scale(0);
  transform-origin: bottom;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  z-index: 0;
}
.messenger-links.show {
  transform: scale(1);
  z-index: 999;
}
.messenger-links a {
  width: 40px;
  margin-left: 10px;
}
.messenger-links img {
  max-width: 40px;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.messenger-links a:hover img {
  transform: scale(1.1);
  text-decoration: none;
}`

// Инициализируем виджет, дождавшись загрузки всех элементов страницы 
// window.onload = function () {
//   let style = document.createElement('style');
//   style.innerHTML = cssWidget
//   document.body.append(style)

//   let div = document.createElement('div');
//   div.className = "messenger__container";
//   div.innerHTML = htmlWidget
//   document.body.append(div)

//   initListener()
// };

function initListener() {
  const menuBtn = document.querySelector(".messenger-btn"),
    menu = document.querySelector(".messenger-links"),
    menuContainer = document.querySelector(".messenger");

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show")
  });
}