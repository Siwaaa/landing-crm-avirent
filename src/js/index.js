window.onload = function () {
  document.getElementById("link-active").focus();
}

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
const accordionTrigger = document.querySelectorAll(".questions__title"),
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

// oppot

const radiosOpportunities = document.querySelectorAll('input[type=radio][name="oppo_desktop"]');

function changeHandlerOpportunities(event) {
  if(this.value) {
    document.querySelectorAll('.opportunities__img').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#oppo_img_' + this.value).classList.add('active')
  }
}

Array.prototype.forEach.call(radiosOpportunities, function (radio) {
  radio.addEventListener('change', changeHandlerOpportunities);
});

// oppot-mob
const selectOpportunities = document.getElementById("oppo_select");

function changeHandlerOpportunitiesMob(event) {
  if(event.target.value) {
    document.querySelectorAll('.opportunities__img').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#oppo_img_mob_' + event.target.value).classList.add('active')
  }
}

selectOpportunities.addEventListener('change', changeHandlerOpportunitiesMob);

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
  if(this.value) {
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
  if(event.target.value) {
    document.querySelectorAll('.interface__img').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#int_img_mob_' + event.target.value).classList.add('active')
  }
}

selectInterface.addEventListener('change', changeHandlerInterfaceMob);