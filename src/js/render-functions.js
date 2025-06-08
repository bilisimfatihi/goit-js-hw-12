import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ul = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.image-li a', {
  captionDelay: 250,
  captionsData: 'alt',
});

export function createGallery(images) {
  const appendHtml = images.map(({largeImageURL,webformatURL,tags,likes,views,comments,downloads}) => {
      return `<li class="image-li">
           <a href="${largeImageURL}"> <img class="li-img" src="${
        webformatURL
      }" alt="${tags.split(',').slice(0, 3).join(',')}"> </a>
          <div class="div-upper">
            <ul>
            <li>
              <div class="div-inner"><b>Likes</b>
            ${likes}</div>
            </li>

            <li>
             <div class="div-inner"><b>Views</b>
            ${views}</div>
            </li>

            <li>
              <div class="div-inner"><b>Comments</b>
            ${comments}</div>
            </li>

            <li>
             <div class="div-inner"><b>Downloads</b>
            ${downloads}</div>
            </li>

            </ul>
          </div>
        </li>`;
    }).join("");
  ul.insertAdjacentHTML("beforeend", appendHtml);
    lightbox.refresh();
}

export function clearGallery() {
    const ul = document.querySelector('.gallery');
    if (ul) ul.innerHTML = "";
}

export function showLoader() {
    document.querySelector('.loading')?.classList.remove('hidden');
}

export function hideLoader() {
    document.querySelector('.loading')?.classList.add('hidden');
}