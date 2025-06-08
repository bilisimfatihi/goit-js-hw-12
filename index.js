import{a as f,S as m,i as l}from"./assets/vendor-DT131awv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="50720875-9e46c15e3f43f509a571f7064",h="https://pixabay.com/api/";function g(t){const o=`${h}?key=${p}&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;return f.get(o).then(i=>i).catch(i=>{throw new Error(i)})}const y=document.querySelector(".gallery");let v=new m(".image-li a",{captionDelay:250,captionsData:"alt"});function b(t){const o=t.map(({largeImageURL:i,webformatURL:n,tags:e,likes:r,views:s,comments:d,downloads:u})=>`<li class="image-li">
           <a href="${i}"> <img class="li-img" src="${n}" alt="${e.split(",").slice(0,3).join(",")}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${r}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${s}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${d}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${u}</div>
            </li>

            </ul>
          </div>
        </li>`).join("");y.insertAdjacentHTML("beforeend",o),v.refresh()}function L(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function w(){var t;(t=document.querySelector(".loading"))==null||t.classList.remove("hidden")}function a(){var t;(t=document.querySelector(".loading"))==null||t.classList.add("hidden")}const c=document.querySelector(".form"),S=document.querySelector('input[name="keywords"]');c.addEventListener("submit",t=>{t.preventDefault();const o=S.value.trim();if(L(),w(),!o)return a(),l.error({title:"Error",message:"Please enter a search term.",position:"topRight"});g(o).then(i=>{if(i.data.hits.length<=0){a(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.reset();return}b(i.data.hits),a(),c.reset()}).catch(i=>{a(),l.error({title:"Error",message:i.message,position:"topRight"})})});
//# sourceMappingURL=index.js.map
