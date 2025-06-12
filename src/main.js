import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from './js/pixabay-api.js';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    showLoadMoreButton,
    hideLoadMoreButton
  } from './js/render-functions.js';

const form = document.querySelector('.form');
const keywordsEl = document.querySelector('input[name="keywords"]');
const loadMoreBtn = document.getElementById('load-more-btn');
let keywords = "";
let currentPage = 1;
const limit = 40;
let totalPages = 0;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  currentPage = 1;
  keywords = keywordsEl.value.trim();
  clearGallery();
  showLoader();
  hideLoadMoreButton();
  if (!keywords) {
    hideLoader();
    return iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topRight',
    });
  }
    
  try {
    const data = await fetchImages(keywords, currentPage);
    totalPages = Math.ceil(data.totalHits / limit)
    if (!data || !data.hits || data.hits.length === 0) {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      form.reset();
      return;
    }
    createGallery(data.hits);

    if (data.totalHits <= limit || currentPage >= totalPages) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
  
loadMoreBtn.addEventListener('click', async (e) => {
  currentPage++;
  showLoader();

  try {
    const data = await fetchImages(keywords, currentPage);
    
    if (!data || !data.hits || data.hits.length === 0) {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      form.reset();
      return;
    }
    createGallery(data.hits);

    if (data.hits.length < limit || currentPage >= totalPages) {
      hideLoadMoreButton();
      iziToast.info({
        position: "topRight",
        message: "We're sorry, but you've reached the end of search results"
      });
    } else {
      showLoadMoreButton();
    }

    const firstCard = document.querySelector('.image-li');
    if (firstCard) {
      const { height: cardHeight } = firstCard.getBoundingClientRect();
      window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
});
