var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},l=e.parcelRequirec448;null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in t){var l=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,l.call(n.exports,n,n.exports),n.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,o){t[e]=o},e.parcelRequirec448=l),l.register("bTcpz",(function(e,o){var t,l,n,d;t=e.exports,l="openModal",n=function(){return a},Object.defineProperty(t,l,{get:n,set:d,enumerable:!0,configurable:!0});const r=[document.getElementById("modal1"),document.getElementById("modal2"),document.getElementById("modal3"),document.getElementById("modal4")];document.querySelectorAll("[data-open-modal_1]").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),r[0].style.display="block",document.body.style.overflow="hidden"}))}));document.querySelectorAll("[data-open-modal_2]").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),r[1].style.display="block",document.body.style.overflow="hidden"}))}));document.querySelectorAll("[data-open-modal_3]").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),r[2].style.display="block",document.body.style.overflow="hidden"}))}));function a(e){r[e-1].style.display="block",document.body.style.overflow="hidden"}document.querySelectorAll("[data-open-modal_4]").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),r[3].style.display="block",document.body.style.overflow="hidden",r[3].querySelector(".iframe").insertAdjacentHTML("beforeend",'<iframe height="560" src="https://www.youtube.com/embed/Xj6pj12ywN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')}))}));const c=e=>{!e.toElement&&!e.relatedTarget&&e.offsetY<1&&setTimeout((()=>{a(1),document.removeEventListener("mouseleave",c)}),500)};document.addEventListener("mouseleave",c),window.onclick=function(e){switch(e.target){case r[0]:r[0].style.display="none",document.body.style.overflow="visible";break;case r[1]:r[1].style.display="none",document.body.style.overflow="visible";break;case r[2]:r[2].style.display="none",document.body.style.overflow="visible";break;case r[3]:r[3].style.display="none",document.body.style.overflow="visible",r[3].querySelector("iframe").remove()}}})),l("bTcpz");
//# sourceMappingURL=index.6c11ed06.js.map
