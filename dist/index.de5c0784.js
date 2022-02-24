window.onload = function() {
    document.getElementById("link-active").focus();
};
// Scroll to #
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors)anchor.addEventListener('click', function(e1) {
    e1.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth'
    });
});
// Accrdions
const accordionTrigger = document.querySelectorAll(".questions__title"), accordionBody = document.querySelectorAll(".questions__answer");
const accordionsToggle = (triggers, bodyElements)=>{
    triggers.forEach((el)=>{
        el.addEventListener("click", ()=>{
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
    bodyElements.forEach((el)=>{
        el.addEventListener("transitionend", ()=>{
            if (el.style.height !== "0px") el.style.height = "auto";
        });
    });
};
accordionsToggle(accordionTrigger, accordionBody);
// BURGER OM-NOM-NOM
const burgerBtn = document.querySelector('#burger');
const navbarMenu = document.querySelector('.navpanel__menu');
burgerBtn.addEventListener('change', function() {
    if (this.checked) navbarMenu.style.height = '400px';
    else navbarMenu.style.height = '0';
});
// oppot
var radios = document.querySelectorAll('input[type=radio][name="oppo_desktop"]');
function changeHandler(event) {
    if (this.value === 'allot') console.log('value', 'allot');
    else if (this.value === 'transfer') console.log('value', 'transfer');
    console.log(this.value);
}
Array.prototype.forEach.call(radios, function(radio) {
    radio.addEventListener('change', changeHandler);
});
// Animation
const e = document.querySelectorAll("[data-animate-on-scroll]");
const t = new IntersectionObserver((e2)=>{
    e2.forEach((e3)=>{
        e3.isIntersecting && e3.target.setAttribute("data-animate-on-scroll", "animated");
    });
}, {
    threshold: 0.25
});
e.forEach((e4)=>{
    t.observe(e4);
});
// interfaces
const radiosInterface = document.querySelectorAll('input[type=radio][name="interfaces_desktop"]');
const imgInterface = document.querySelector('.interface__img');
function changeHandlerInterface(event) {
    console.log(this.value);
    if (this.value) imgInterface.setAttribute('src', require(`./img/interface/desktop/${this.value}.png`));
}
Array.prototype.forEach.call(radiosInterface, function(radio) {
    radio.addEventListener('change', changeHandlerInterface);
});

//# sourceMappingURL=index.de5c0784.js.map
