!function(){var e=[{title:"Клиентская база",text_main:"Все данные по клиенту в одном месте: фотографии, платежи, балансы, договора, штрафы ГИБДД.",text_desc:"Помогает не терять постоянных клиентов. Вы сможете в любой момент времени проверить, какой водитель в какой момент ездил на автомобиле."},{title:"Договора",text_main:"Сократите время на выдачу автомобиля. Формирование и печать договора в 2 клика",text_desc:"Больше не нужно вручную заполнять договор. Все документы формируется автоматически из шаблона и моментально отправляются на печать."},{title:"Система биллинга",text_main:"Не нужно считать оплаты вручную и звонить водителю с напоминанием.",text_desc:"Робот производит автоматическое списание арендной платы согласно тарифу договора. Текущее состояние счета каждого водителя отображается на главном экране."},{title:"Штрафы ГИБДД",text_main:"Вести учет штрафов стало намного проще. Штрафы фиксируются на лицевом счете водителя",text_desc:"и вы больше не потеряете информацию по ним, а водитель всегда будет в курсе появления новых штрафов. Учет штрафов ГИБДД осуществляется напрямую из государственной базы ГИС ГМП."},{title:"Техническое обслуживание",text_main:"Вся история обслуживания автомобилей, своевременный контроль износа запчастей в связке со складом.",text_desc:"Предоставьте доступ автосервису или мастеру к карточкам ваших автомобилей, и вы всегда будете в курсе состояния каждой единицы автопарка и ее рентабельности."},{title:"Система напоминаний",text_main:"Внести платеж, сделать ТО, оплатить штраф, заменить полис автострахования – обо всех основных вопросах CRM напомнит автоматически.",text_desc:"Своевременное напоминание позволяет снизить риск возникновения долга у водителей. Автоматическая блокировка ограничит доступ к автомобилю пока аренда не будет оплачена."},{title:"Складской учет",text_main:"Все запчасти в одном месте, учет установки на автомобили.",text_desc:""},{title:"Сотрудники",text_main:"Несколько уровней доступа: администратор, менеджер, мастер СТО",text_desc:"Каждый уровень доступа показывает нужную информацию."},{title:"Интеграция с Яндекс Такси",text_main:"Списывайте аренду автоматически прямо с таксометра водителя.",text_desc:"Система проверит задолжность водителя за аренду и спишет деньги диспетчерской Яндекс Такси."},{title:"Фотоосмотры",text_main:"Системный контроль состояния автомобилей на всех стадиях работы:",text_desc:"на выдаче, на приеме или в процессе долгосрочной аренды.  Сравнивайте сстояния до и после в интуитивно понятном экране. Все повреждения будут моментально выявляться и фиксироваться за водителем."},{title:"Отчёты",text_main:"Вся информация по автомобилям, по водителям, по складу и всему автопарку в 1 месте.",text_desc:"Отчеты по автомобилям и его рентабельности; по водителям, кто больше принес денег в парк, а кто потратил; по складу: остатки и движение запчастей; сводный отчет и основные показатели."},{title:"Касса",text_main:"Контролируйте учет движения денежных средств в авто прокате.",text_desc:"Сколько денег и менеджера, сколько на счету, сколько в кассе. Все видно и удобно планировать. Отчеты по кассе."}];window.onload=function(){document.getElementById("link-active").focus()};var t=document.querySelectorAll('a[href*="#"]'),n=!0,i=!1,o=void 0;try{for(var r,c=function(e,t){var n=t.value;n.addEventListener("click",(function(e){e.preventDefault();var t=n.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth"})}))},a=t[Symbol.iterator]();!(n=(r=a.next()).done);n=!0)c(0,r)}catch(e){i=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}var l,u=document.querySelectorAll(".questions__title"),s=document.querySelectorAll(".questions__answer");l=s,u.forEach((function(e){e.addEventListener("click",(function(){var t=e.closest(".questions__item").querySelector(".questions__answer");t.style.height="".concat(t.scrollHeight,"px"),t.style.marginTop="20px","0px"===t.style.height||"0px"===window.getComputedStyle(t).height?(e.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false")):(t.style.height="0",e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true"),t.style.marginTop="0")}))})),l.forEach((function(e){e.addEventListener("transitionend",(function(){"0px"!==e.style.height&&(e.style.height="auto")}))}));var d=document.querySelector("#burger"),m=document.querySelector(".navpanel__menu");d.addEventListener("change",(function(){this.checked?m.style.height="400px":m.style.height="0"}));var _=document.querySelectorAll('input[type=radio][name="oppo_desktop"]');function v(t){if(this.value){document.querySelectorAll(".opportunities__img").forEach((function(e){e.classList.remove("active")})),document.querySelector("#oppo_img_"+this.value).classList.add("active");var n=document.querySelector(".opportunities__item-info");n.children[0].textContent=e[this.value-1].title,n.children[1].textContent=e[this.value-1].text_main,n.children[2].textContent=e[this.value-1].text_desc}}Array.prototype.forEach.call(_,(function(e){e.addEventListener("change",v)})),document.getElementById("oppo_select").addEventListener("change",(function(t){if(t.target.value){document.querySelectorAll(".opportunities__img").forEach((function(e){e.classList.remove("active")})),document.querySelector("#oppo_img_mob_"+t.target.value).classList.add("active");var n=document.querySelector(".opportunities__item-info.mobile");n.children[0].textContent=e[t.target.value-1].title,n.children[1].innerHTML=e[t.target.value-1].text_main+"<br>"+e[t.target.value-1].text_desc}}));var h=document.querySelector(".oppo_desc"),y=document.querySelector("#oppo_info_btn");y.addEventListener("click",(function(){"Подробнее"==y.textContent?(h.style.display="block",y.textContent="Скрыть"):(h.style.display="none",y.textContent="Подробнее")}));var f=document.querySelector(".opportunities__item-info.mobile");document.querySelector(".browser-mob__i").addEventListener("click",(function(){f.style.display="block"===f.style.display?"none":"block"}));var p=document.querySelectorAll("[data-animate-on-scroll]"),x=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.setAttribute("data-animate-on-scroll","animated")}))}),{threshold:.25});p.forEach((function(e){x.observe(e)}));var g=document.querySelectorAll('input[type=radio][name="interfaces_desktop"]');function q(e){this.value&&(document.querySelectorAll(".interface__img").forEach((function(e){e.classList.remove("active")})),document.querySelector("#int_img_"+this.value).classList.add("active"))}Array.prototype.forEach.call(g,(function(e){e.addEventListener("change",q)})),document.getElementById("int_select").addEventListener("change",(function(e){e.target.value&&(document.querySelectorAll(".interface__img").forEach((function(e){e.classList.remove("active")})),document.querySelector("#int_img_mob_"+e.target.value).classList.add("active"))}));var S=document.querySelectorAll('input[type=radio][name="messengers"]');function E(e){this.value&&(document.querySelector("#input-mes").placeholder="Ваш телефон в "+this.value)}Array.prototype.forEach.call(S,(function(e){e.addEventListener("change",E)}))}();
//# sourceMappingURL=index.b8da3b97.js.map