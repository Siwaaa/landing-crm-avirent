window.onload=function(){document.getElementById("link-active").focus()};const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href").substr(1);document.getElementById(o).scrollIntoView({behavior:"smooth"})}));const t=document.querySelectorAll(".questions__title"),o=document.querySelectorAll(".questions__answer");var n;n=o,t.forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".questions__item").querySelector(".questions__answer");t.style.height=`${t.scrollHeight}px`,t.style.marginTop="20px","0px"===t.style.height||"0px"===window.getComputedStyle(t).height?(e.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false")):(t.style.height="0",e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true"),t.style.marginTop="0")}))})),n.forEach((e=>{e.addEventListener("transitionend",(()=>{"0px"!==e.style.height&&(e.style.height="auto")}))}));const r=document.querySelector("#burger"),c=document.querySelector(".navpanel__menu");r.addEventListener("change",(function(){this.checked?c.style.height="400px":c.style.height="0"}));const i=document.querySelectorAll('input[type=radio][name="oppo_desktop"]');function a(e){this.value&&(document.querySelectorAll(".opportunities__img").forEach((e=>{e.classList.remove("active")})),document.querySelector("#oppo_img_"+this.value).classList.add("active"))}Array.prototype.forEach.call(i,(function(e){e.addEventListener("change",a)}));document.getElementById("oppo_select").addEventListener("change",(function(e){e.target.value&&(document.querySelectorAll(".opportunities__img").forEach((e=>{e.classList.remove("active")})),document.querySelector("#oppo_img_mob_"+e.target.value).classList.add("active"))}));const s=document.querySelectorAll("[data-animate-on-scroll]"),l=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.setAttribute("data-animate-on-scroll","animated")}))}),{threshold:.25});s.forEach((e=>{l.observe(e)}));const u=document.querySelectorAll('input[type=radio][name="interfaces_desktop"]');function d(e){this.value&&(document.querySelectorAll(".interface__img").forEach((e=>{e.classList.remove("active")})),document.querySelector("#int_img_"+this.value).classList.add("active"))}Array.prototype.forEach.call(u,(function(e){e.addEventListener("change",d)}));document.getElementById("int_select").addEventListener("change",(function(e){e.target.value&&(document.querySelectorAll(".interface__img").forEach((e=>{e.classList.remove("active")})),document.querySelector("#int_img_mob_"+e.target.value).classList.add("active"))}));
//# sourceMappingURL=index.39df73e8.js.map
