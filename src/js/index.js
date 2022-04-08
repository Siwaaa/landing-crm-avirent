const listInfo = [
  {
    title: 'Клиентская база',
    text_main: 'Все данные по клиенту в одном месте: фотографии, платежи, балансы, договора, штрафы ГИБДД.',
    text_desc: 'Помогает не терять постоянных клиентов. Вы сможете в любой момент времени проверить, какой водитель в какой момент ездил на автомобиле.'
  },
  {
    title: 'Договора',
    text_main: 'Сократите время на выдачу автомобиля. Формирование и печать договора в 2 клика',
    text_desc: 'Больше не нужно вручную заполнять договор. Все документы формируется автоматически из шаблона и моментально отправляются на печать.'
  },
  {
    title: 'Система биллинга',
    text_main: 'Не нужно считать аренду вручную и звонить водителю с напоминанием об оплате.',
    text_desc: 'Аренда считается автоматически согласно тарифу и водитель может вносить платежи онлайн с любой карты.'
  },
  {
    title: 'Штрафы ГИБДД',
    text_main: 'Вести учет штрафов стало намного быстрее. Они фиксируются на лицевом счете водителя',
    text_desc: 'и вы больше не потеряете информацию по ним. При появлении постановления водитель получит уведомление и ссылку на его оплату. Штрафы ГИБДД загружаются напрямую из государственной базы ГИС ГМП.'
  },
  {
    title: 'Техническое обслуживание',
    text_main: 'Вся история обслуживания автомобилей, своевременный контроль износа запчастей в связке со складом.',
    text_desc: 'Предоставьте доступ автосервису или мастеру к карточкам ваших автомобилей, и вы всегда будете в курсе состояния каждой единицы автопарка и ее рентабельности.'
  },
  {
    title: 'Система напоминаний',
    text_main: 'Внести платеж, сделать ТО, оплатить штраф, заменить полис автострахования – обо всех основных вопросах Avirent напомнит автоматически.',
    text_desc: 'Своевременное напоминание позволяет снизить риск возникновения долга у водителей. Автоматическая блокировка ограничит доступ к автомобилю пока аренда не будет оплачена.'
  },
  {
    title: 'Складской учет',
    text_main: 'Все запчасти в одном месте, учет установки на автомобили.',
    text_desc: 'Прогнозируйте и контролируйте ваши складские остатки. Какие запчасти лучше закупить впрок, какие ходят дольше, какой производитель оптимален по цене и качеству? Тут будут все ответы.'
  },
  {
    title: 'Сотрудники',
    text_main: 'Несколько уровней доступа: администратор, менеджер, мастер СТО',
    text_desc: 'Каждый уровень доступа показывает нужную информацию.'
  },
  {
    title: 'Интеграция с Яндекс Такси',
    text_main: 'Списывайте аренду автоматически прямо с таксометра водителя.',
    text_desc: 'Система проверит задолжность водителя за аренду и спишет деньги диспетчерской Яндекс Такси.'
  },
  {
    title: 'Фотоосмотры',
    text_main: 'Системный контроль состояния автомобилей на всех стадиях работы:',
    text_desc: 'на выдаче, на приеме или в процессе долгосрочной аренды.  Сравнивайте сстояния до и после в интуитивно понятном экране. Все повреждения будут моментально выявляться и фиксироваться за водителем.'
  },
  {
    title: 'Отчёты',
    text_main: 'Вся информация по автомобилям, по водителям, по складу и всему автопарку в 1 месте.',
    text_desc: 'Отчеты по автомобилям и его рентабельности; по водителям, кто больше принес денег в парк, а кто потратил; по складу: остатки и движение запчастей; сводный отчет и основные показатели.'
  },
  {
    title: 'Касса',
    text_main: 'Контролируйте учет движения денежных средств в авто прокате.',
    text_desc: 'Сколько денег у менеджеров, сколько на счету, сколько в кассе? Все видно и удобно планировать. Отчеты по кассе.'
  }
]

// focused nav link
const links = document.querySelectorAll(".link-nav")

links.forEach(e => {
  e.addEventListener('click', () => {
    links.forEach(el => {
      el.classList.remove('link-active')
    })
  })
})


// lazy loading

document.addEventListener("DOMContentLoaded", function () {
  const lazyloadImages = document.querySelectorAll("img[data-src]");
  let lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      lazyloadImages.forEach(function (img) {
        if ((img.getBoundingClientRect().top - 200 <= window.innerHeight
          && img.getBoundingClientRect().bottom >= 0)
          && getComputedStyle(img).display !== "none"
        ) {
          const reg = img.nextSibling.firstChild.textContent.split(/"([^"]*)"/g);
          img.src = reg[1];
          if(reg[3]) img.srcset = reg[3]
          img.removeAttribute('data-src')
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 200);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

// Scroll to #

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
    })
  })
}

// Accrdions
const accordionTrigger = document.querySelectorAll(".questions__item"),
  accordionBody = document.querySelectorAll(".questions__answer");

const accordionsToggle = (triggers, bodyElements) => {
  triggers.forEach((el) => {
    el.addEventListener("click", () => {
      //Находим контентную часть у ближайшего родителя
      const elBody = el.closest(".questions__item").querySelector(".questions__answer");
      // el.classList.toggle('accordion__trigger--active');
      elBody.style.height = `${elBody.scrollHeight}px`;
      elBody.style.marginTop = "20px";
      if (elBody.style.height === "0px" || window.getComputedStyle(elBody).height === "0px") {
        el.setAttribute("aria-expanded", "true");
        elBody.setAttribute("aria-hidden", "false");
      } else {
        elBody.style.height = "0";
        el.setAttribute("aria-expanded", "false");
        elBody.setAttribute("aria-hidden", "true");
        elBody.style.marginTop = "0";
      }
    });
  });
  bodyElements.forEach((el) => {
    el.addEventListener("transitionend", () => {
      if (el.style.height !== "0px") {
        el.style.height = "auto";
      }
    });
  });
};
accordionsToggle(accordionTrigger, accordionBody);

// oppot

const radiosOpportunities = document.querySelectorAll('input[type=radio][name="oppo_desktop"]');

function changeHandlerOpportunities(event) {
  if (this.value) {
    document.querySelectorAll('.opportunities__img').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#oppo_img_' + this.value).classList.add('active')
    const info = document.querySelector('.opportunities__item-info')
    // формируем плашку с информацией
    info.children[0].textContent = listInfo[this.value - 1].title
    info.children[1].textContent = listInfo[this.value - 1].text_main
    info.children[2].textContent = listInfo[this.value - 1].text_desc
  }
}

Array.prototype.forEach.call(radiosOpportunities, function (radio) {
  radio.addEventListener('change', changeHandlerOpportunities);
});

// oppot-mob
const selectOpportunities = document.getElementById("oppo_select");

function changeHandlerOpportunitiesMob(event) {
  if (event.target.value) {
    document.querySelectorAll('.opportunities__img').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#oppo_img_mob_' + event.target.value).classList.add('active')
    // формируем плашку с информацией
    const info = document.querySelector('.opportunities__item-info.mobile')
    info.children[0].textContent = listInfo[event.target.value - 1].title
    info.children[1].innerHTML = listInfo[event.target.value - 1].text_main + '<br>' + listInfo[event.target.value - 1].text_desc
  }
}

selectOpportunities.addEventListener('change', changeHandlerOpportunitiesMob);


// oppo desc

const oppoDesc = document.querySelector(".oppo_desc");
const oppoBtn = document.querySelector("#oppo_info_btn");

oppoBtn.addEventListener('click', () => {
  if (oppoBtn.textContent == "Подробнее") {
    oppoDesc.style.display = "block"
    oppoBtn.textContent = "Скрыть"
  } else {
    oppoDesc.style.display = "none"
    oppoBtn.textContent = "Подробнее"
  }
})

const oppoDescMob = document.querySelector(".opportunities__item-info.mobile");
const oppoBtnMob = document.querySelector(".browser-mob__i");

oppoBtnMob.addEventListener('click', () => {
  oppoDescMob.style.display = oppoDescMob.style.display === 'block' ? 'none' : 'block'
})


// Animation

const e = document.querySelectorAll("[data-animate-on-scroll]")
const t = new IntersectionObserver((e => {
  e.forEach((e => {
    e.isIntersecting && e.target.setAttribute("data-animate-on-scroll", "animated")
  }
  ))
}), {
  threshold: 0.25
});

e.forEach((e => {
  t.observe(e)
}
))

// interfaces

const radiosInterface = document.querySelectorAll('input[type=radio][name="interfaces_desktop"]');

function changeHandlerInterface(event) {
  if (this.value) {
    document.querySelectorAll('.interface__img').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#int_img_' + this.value).classList.add('active')
  }
}

Array.prototype.forEach.call(radiosInterface, function (radio) {
  radio.addEventListener('change', changeHandlerInterface);
});


// interfaces-mob
const selectInterface = document.getElementById("int_select");

function changeHandlerInterfaceMob(event) {
  if (event.target.value) {
    document.querySelectorAll('.interface__img').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#int_img_mob_' + event.target.value).classList.add('active')
  }
}

selectInterface.addEventListener('change', changeHandlerInterfaceMob);


// mess 

const radiosMess = document.querySelectorAll('input[type=radio][name="messengers"]');

function changeHandlerMess(event) {
  if (this.value) {
    document.querySelector('#input-mes').placeholder = 'Ваш телефон в ' + this.value
  }
}

Array.prototype.forEach.call(radiosMess, function (radio) {
  radio.addEventListener('change', changeHandlerMess);
});


// cookie 
const cookieModal = document.querySelector('.cookie')
const closeBtn = document.querySelector('.cookie-close')

document.addEventListener('DOMContentLoaded', () => {
  // проверяем после загрузки страницы localStorage на наличие согласия cookie
  console.log(localStorage.getItem('consent_cookies'));
  if(localStorage.getItem('consent_cookies')) {
    cookieModal.style.display = "none";
  } else {
    cookieModal.style.display = "block";
  }
})

closeBtn.addEventListener('click', () => {
  localStorage.setItem('consent_cookies', true);
  cookieModal.style.display = "none";
})

