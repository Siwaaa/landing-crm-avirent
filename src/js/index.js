
window.onload = function () {
  document.getElementById("link-active").focus();
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