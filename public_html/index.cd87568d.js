!function(){document.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.querySelector(".header__nav");let n,t=window.pageYOffset;window.addEventListener("scroll",(()=>{n=window.pageYOffset;const d=()=>e.classList.contains("header__nav-fixed");n>100&&n>t&&!d()&&e.classList.add("header__nav-fixed"),n<t&&d()&&e.classList.remove("header__nav-fixed"),t=n}))})()}));const e=document.querySelector("#burger"),n=document.querySelector(".navpanel__menu");e.addEventListener("change",(function(){this.checked?n.style.height="400px":n.style.height="0"}));document.querySelectorAll(".navpanel-link").forEach((t=>{t.addEventListener("click",(()=>{e.checked=!1,n.style.height="0"}))}))}();
//# sourceMappingURL=index.cd87568d.js.map
