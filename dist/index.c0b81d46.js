document.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.querySelector(".header__nav");let t,n=window.pageYOffset;window.addEventListener("scroll",(()=>{t=window.pageYOffset;const d=()=>e.classList.contains("header__nav-fixed");t>100&&t>n&&!d()&&e.classList.add("header__nav-fixed"),t<n&&d()&&e.classList.remove("header__nav-fixed"),n=t}))})()}));const e=document.querySelector("#burger"),t=document.querySelector(".navpanel__menu");e.addEventListener("change",(function(){this.checked?t.style.height="400px":t.style.height="0"}));document.querySelectorAll(".navpanel-link").forEach((n=>{n.addEventListener("click",(()=>{e.checked=!1,t.style.height="0"}))}));
//# sourceMappingURL=index.c0b81d46.js.map
