const e=[{title:"Клиентская база",text_main:"Все данные по клиенту в одном месте: фотографии, платежи, балансы, договора, штрафы ГИБДД.",text_desc:"Помогает не терять постоянных клиентов. Вы сможете в любой момент времени проверить, какой водитель в какой момент ездил на автомобиле."},{title:"Договора",text_main:"Сократите время на выдачу автомобиля. Формирование и печать договора в 2 клика",text_desc:"Больше не нужно вручную заполнять договор. Все документы формируется автоматически из шаблона и моментально отправляются на печать."},{title:"Система биллинга",text_main:"Не нужно считать аренду вручную и звонить водителю с напоминанием об оплате.",text_desc:"Аренда считается автоматически согласно тарифу и водитель может вносить платежи онлайн с любой карты."},{title:"Штрафы ГИБДД",text_main:"Вести учет штрафов стало намного быстрее. Они фиксируются на лицевом счете водителя",text_desc:"и вы больше не потеряете информацию по ним. При появлении постановления водитель получит уведомление и ссылку на его оплату. Штрафы ГИБДД загружаются напрямую из государственной базы ГИС ГМП."},{title:"Техническое обслуживание",text_main:"Вся история обслуживания автомобилей, своевременный контроль износа запчастей в связке со складом.",text_desc:"Предоставьте доступ автосервису или мастеру к карточкам ваших автомобилей, и вы всегда будете в курсе состояния каждой единицы автопарка и ее рентабельности."},{title:"Система напоминаний",text_main:"Внести платеж, сделать ТО, оплатить штраф, заменить полис автострахования – обо всех основных вопросах Avirent напомнит автоматически.",text_desc:"Своевременное напоминание позволяет снизить риск возникновения долга у водителей. Автоматическая блокировка ограничит доступ к автомобилю пока аренда не будет оплачена."},{title:"Складской учет",text_main:"Все запчасти в одном месте, учет установки на автомобили.",text_desc:"Прогнозируйте и контролируйте ваши складские остатки. Какие запчасти лучше закупить впрок, какие ходят дольше, какой производитель оптимален по цене и качеству? Тут будут все ответы."},{title:"Сотрудники",text_main:"Несколько уровней доступа: администратор, менеджер, мастер СТО",text_desc:"Каждый уровень доступа показывает нужную информацию."},{title:"Интеграция с Яндекс Такси",text_main:"Списывайте аренду автоматически прямо с таксометра водителя.",text_desc:"Система проверит задолжность водителя за аренду и спишет деньги диспетчерской Яндекс Такси."},{title:"Фотоосмотры",text_main:"Системный контроль состояния автомобилей на всех стадиях работы:",text_desc:"на выдаче, на приеме или в процессе долгосрочной аренды.  Сравнивайте сстояния до и после в интуитивно понятном экране. Все повреждения будут моментально выявляться и фиксироваться за водителем."},{title:"Отчёты",text_main:"Вся информация по автомобилям, по водителям, по складу и всему автопарку в 1 месте.",text_desc:"Отчеты по автомобилям и его рентабельности; по водителям, кто больше принес денег в парк, а кто потратил; по складу: остатки и движение запчастей; сводный отчет и основные показатели."},{title:"Касса",text_main:"Контролируйте учет движения денежных средств в авто прокате.",text_desc:"Сколько денег у менеджеров, сколько на счету, сколько в кассе? Все видно и удобно планировать. Отчеты по кассе."}],t=document.querySelectorAll(".link-nav");t.forEach((e=>{e.addEventListener("click",(()=>{t.forEach((e=>{e.classList.remove("link-active")}))}))})),document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll("img[data-src]");let t;function n(){t&&clearTimeout(t),t=setTimeout((function(){e.forEach((function(e){if(e.getBoundingClientRect().top-200<=window.innerHeight&&e.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(e).display){const t=e.nextSibling.firstChild.textContent.split(/"([^"]*)"/g);e.src=t[1],t[3]&&(e.srcset=t[3]),e.removeAttribute("data-src")}})),0==e.length&&(document.removeEventListener("scroll",n),window.removeEventListener("resize",n),window.removeEventListener("orientationChange",n))}),200)}document.addEventListener("scroll",n),window.addEventListener("resize",n),window.addEventListener("orientationChange",n)}));const n=document.querySelectorAll('a[href*="#"]');for(let e of n)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth"})}));const o=document.querySelectorAll(".questions__item"),i=document.querySelectorAll(".questions__answer");var c;c=i,o.forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".questions__item").querySelector(".questions__answer");t.style.height=`${t.scrollHeight}px`,t.style.marginTop="20px","0px"===t.style.height||"0px"===window.getComputedStyle(t).height?(e.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false")):(t.style.height="0",e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true"),t.style.marginTop="0")}))})),c.forEach((e=>{e.addEventListener("transitionend",(()=>{"0px"!==e.style.height&&(e.style.height="auto")}))}));const r=document.querySelectorAll('input[type=radio][name="oppo_desktop"]');function l(t){if(this.value){document.querySelectorAll(".opportunities__img").forEach((e=>{e.classList.remove("active")})),document.querySelector("#oppo_img_"+this.value).classList.add("active");const t=document.querySelector(".opportunities__item-info");t.children[0].textContent=e[this.value-1].title,t.children[1].textContent=e[this.value-1].text_main,t.children[2].textContent=e[this.value-1].text_desc}}Array.prototype.forEach.call(r,(function(e){e.addEventListener("change",l)}));document.getElementById("oppo_select").addEventListener("change",(function(t){if(t.target.value){document.querySelectorAll(".opportunities__img").forEach((e=>{e.classList.remove("active")})),document.querySelector("#oppo_img_mob_"+t.target.value).classList.add("active");const n=document.querySelector(".opportunities__item-info.mobile");n.children[0].textContent=e[t.target.value-1].title,n.children[1].innerHTML=e[t.target.value-1].text_main+"<br>"+e[t.target.value-1].text_desc}}));const s=document.querySelector(".oppo_desc"),a=document.querySelector("#oppo_info_btn");a.addEventListener("click",(()=>{"Подробнее"==a.textContent?(s.style.display="block",a.textContent="Скрыть"):(s.style.display="none",a.textContent="Подробнее")}));const d=document.querySelector(".opportunities__item-info.mobile");document.querySelector(".browser-mob__i").addEventListener("click",(()=>{d.style.display="block"===d.style.display?"none":"block"}));const u=document.querySelectorAll("[data-animate-on-scroll]"),m=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.setAttribute("data-animate-on-scroll","animated")}))}),{threshold:.25});u.forEach((e=>{m.observe(e)}));const _=document.querySelectorAll('input[type=radio][name="interfaces_desktop"]');function y(e){this.value&&(document.querySelectorAll(".interface__img").forEach((e=>{e.classList.remove("active")})),document.querySelector("#int_img_"+this.value).classList.add("active"))}Array.prototype.forEach.call(_,(function(e){e.addEventListener("change",y)}));document.getElementById("int_select").addEventListener("change",(function(e){e.target.value&&(document.querySelectorAll(".interface__img").forEach((e=>{e.classList.remove("active")})),document.querySelector("#int_img_mob_"+e.target.value).classList.add("active"))}));const v=document.querySelectorAll('input[type=radio][name="messengers"]');function h(e){this.value&&(document.querySelector("#input-mes").placeholder="Ваш телефон в "+this.value)}Array.prototype.forEach.call(v,(function(e){e.addEventListener("change",h)}));const p=document.querySelector(".cookie"),g=document.querySelector(".cookie-close");document.addEventListener("DOMContentLoaded",(()=>{console.log(localStorage.getItem("consent_cookies")),localStorage.getItem("consent_cookies")?p.style.display="none":p.style.display="block"})),g.addEventListener("click",(()=>{localStorage.setItem("consent_cookies",!0),p.style.display="none"}));
//# sourceMappingURL=index.e566b808.js.map