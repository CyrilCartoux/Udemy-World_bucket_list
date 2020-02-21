!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";let i,a;n.r(e);const o=document.getElementById("panorama"),r=document.getElementById("back-to-map"),l=document.getElementById("reset-map");function s(){i=new google.maps.Map(document.getElementById("map"),{center:{lat:48.858245,lng:2.294515},zoom:3,mapTypeId:"satellite"}),a=new google.maps.StreetViewPanorama(document.getElementById("panorama"),{position:{lat:48.858245,lng:2.294515},pov:{heading:34,pitch:10}}),l.addEventListener("click",c),r.addEventListener("click",u),o.style.display="none",r.style.display="none"}function d(t){const e=new google.maps.Marker({position:t.coordinates,map:i,icon:t.done?"./dist/images/marker-done.png":"./dist/images/marker.png"});e.addListener("click",(function(){var t;t=e.getPosition(),i.setZoom(20),i.setCenter(t),i.setMapTypeId("satellite")}))}function c(){i.setZoom(3),i.setCenter({lat:48.858245,lng:2.294515}),i.setMapTypeId("satellite")}function u(){o.style.display="none",r.style.display="none",l.style.display="block"}const p=[{id:1,imagePath:"./dist/images/img-maldives.jpg",description:"Maison sur pilotis aux Maldives",done:!1,link:"https://maldives-a-la-carte.com/bungalow-pilotis",coordinates:{lat:-.681786,lng:73.191414}},{id:2,imagePath:"./dist/images/img-puntacana.jpg",description:"Visiter l'île de Saona - Punta Cana",done:!0,link:"https://www.routard.com/guide_voyage_lieu/3196-ile_de_saona_(isla_saona).htm",coordinates:{lat:18.1528378,lng:-68.7619247}},{id:3,imagePath:"./dist/images/img-kenya.jpg",description:"Safari Photo au Kenya",done:!1,link:"http://www.lagons-plages.com/voyage/punta-cana-et-isla-saona-photos-de-la-republique-dominicaine",coordinates:{lat:-.52483,lng:36.664008}},{id:4,imagePath:"./dist/images/img-paris.jpg",description:"Monter en haut de la Tour Eiffel",done:!0,link:"https://www.toureiffel.paris/fr/tarifs-horaires",coordinates:{lat:48.858245,lng:2.294515}}],m=document.querySelector("#dreams-container");function g(){for(;m.hasChildNodes();)m.removeChild(m.lastChild);p.forEach(f),document.querySelectorAll(".button-visit").forEach(t=>{t.addEventListener("click",e=>{var n,i;i=t.parentElement.parentElement.getAttribute("id"),n=p.filter(t=>t.id==i)[0].coordinates,a.setPosition(n),o.style.display="block",r.style.display="block",l.style.display="none"})}),document.querySelectorAll(".button-action").forEach(t=>{t.addEventListener("click",e=>{!function(t){let e=p.filter(e=>e.id==t)[0];e.done=!e.done}(t.parentElement.parentElement.getAttribute("id")),g()})})}function f(t){const e=document.createElement("div");e.innerHTML=`<div class="card text-center" id="${t.id}">\n\t\t\t\t\t\t\t\t<h4 class="card-header font-weight-bold">\n\t\t\t\t\t\t\t\t\t${t.description}\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<img src="${t.imagePath}" class="card-img-top" alt="image maldives">\n\t\t\t\t\t\t\t\t\t<div class="card-body">\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="button-action btn btn-${t.done?"secondary":"danger"} btn-block font-weight-bold">${t.done?"Je veux le refaire ! ":"Je me lance !"}</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="card-footer text-muted text-right">\n\t\t\t\t\t\t\t\t\t\t<a href="#" class="button-visit btn btn-outline-secondary btn-sm">Visiter</a>\n\t\t\t\t\t\t\t\t\t\t<a href="${t.link}" target="_blank" class="btn btn-outline-dark btn-sm">Plus d'infos</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>`,m.appendChild(e),d(t)}window.init=function(){s(),g()}}]);
//# sourceMappingURL=bundle.js.map