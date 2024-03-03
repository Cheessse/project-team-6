import"./assets/shopping-list-0080340e.js";import{a as r,P as u}from"./assets/vendor-90aadca8.js";async function m(){const t="https://books-backend.p.goit.global/books/category-list",e={method:"GET"};return(await r.get(t,{options:e})).data}async function y(t){const e="https://books-backend.p.goit.global/books/category",o={method:"GET",params:{category:t}};return(await r.get(e,{options:o})).data}async function b(){const t="https://books-backend.p.goit.global/books/top-books",e={method:"GET"};return(await r.get(t,{options:e})).data}const l=document.querySelector(".books-container"),s=document.querySelector(".container-title"),c=document.querySelector(".container-category");function k({book_image:t,title:e,author:o}){return`<ul class="book-div">
 <li class="book-img"><img src="${t}" alt=""></li>
 <li class="book-title">${e}</li>
 <li class="author">${o}</li>
</ul>`}function g(t){return t.map(k).join("")}function f({books:t,list_name:e}){const o=g(t);s.textContent="Best Sellers Books",c.textContent=`'${e}'`,s.insertAdjacentHTML("afterbegin",s.textContent),c.insertAdjacentHTML("afterbegin",c.textContent),l.insertAdjacentHTML("beforeend",o)}function h({books:t,list_name:e}){const o=g(t);s.textContent=`'${e}'`,s.insertAdjacentHTML("afterbegin",s.textContent),l.insertAdjacentHTML("beforeend",o)}const C=document.querySelector("#category-list");async function L(t){t.preventDefault(),categoryName=C.querySelectorAll("#p-list");try{const e=await y(),o=await b();e.target.list_name===categoryName?h(e):f(o)}catch(e){console.log(e)}t.target.reset()}window.onload=function(){const t=document.getElementById("category-list"),e=document.createElement("li");e.textContent="ALL CATEGORIES",e.id="title",t.appendChild(e),m().then(o=>{o.forEach(function(n){const a=document.createElement("p");a.textContent=n.list_name,a.id="p-list",a.addEventListener("click",L),t.appendChild(a)})}).catch(o=>{console.error("Error fetching data;",o)})};function d(t,e){const o=JSON.parse(localStorage.getItem("shoppingList"))||[],n=(t-1)*e,a=n+e,p=o.slice(n,a);document.getElementById("shopping-list").innerHTML=p.join("<br>")}const i=3,E=new u(document.getElementById("pagination"),{totalItems:JSON.parse(localStorage.getItem("shoppingList")).length,itemsPerPage:i,visiblePages:5,centerAlign:!0});E.on("beforeMove",function(t){d(t.page,i)});d(1,i);
//# sourceMappingURL=commonHelpers.js.map
