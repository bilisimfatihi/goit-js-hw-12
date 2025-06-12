import{a as $,S,i as n}from"./assets/vendor-DT131awv.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const q="50720875-9e46c15e3f43f509a571f7064",E="https://pixabay.com/api/";async function g(r,e=1,s=40){try{const o=`${E}?key=${q}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${e}&per_page=${s}`;return(await $.get(o)).data}catch(o){throw o}}const P=document.querySelector(".gallery"),p=document.getElementById("load-more-btn");let B=new S(".image-li a",{captionDelay:250,captionsData:"alt"});function y(r){const e=r.map(({largeImageURL:s,webformatURL:o,tags:t,likes:i,views:l,comments:L,downloads:w})=>`<li class="image-li">
           <a href="${s}"> <img class="li-img" src="${o}" alt="${t.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${i}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${l}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${L}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${w}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");P.insertAdjacentHTML("beforeend",e),B.refresh()}function M(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}function v(){var r;(r=document.querySelector(".loading"))==null||r.classList.remove("hidden")}function c(){var r;(r=document.querySelector(".loading"))==null||r.classList.add("hidden")}function b(){p.classList.remove("hidden")}function u(){p.classList.add("hidden")}const m=document.querySelector(".form"),R=document.querySelector('input[name="keywords"]'),H=document.getElementById("load-more-btn");let d="",a=1;const h=40;let f=0;m.addEventListener("submit",async r=>{if(r.preventDefault(),a=1,d=R.value.trim(),M(),v(),u(),!d)return c(),n.error({title:"Error",message:"Please enter a search term.",position:"topRight"});try{const e=await g(d,a);if(f=Math.ceil(e.totalHits/h),!e||!e.hits||e.hits.length===0){c(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.reset();return}y(e.hits),e.totalHits<=h||a>=f?u():b()}catch(e){n.error({title:"Error",message:e.message,position:"topRight"})}finally{c()}});H.addEventListener("click",async r=>{a++,v();try{const e=await g(d,a);if(!e||!e.hits||e.hits.length===0){c(),n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.reset();return}y(e.hits),e.hits.length<h||a>=f?(u(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results"})):b();const s=document.querySelector(".image-li");if(s){const{height:o}=s.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}catch(e){n.error({title:"Error",message:e.message,position:"topRight"})}finally{c()}});
//# sourceMappingURL=index.js.map
