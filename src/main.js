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
  } from './js/render-functions.js';

const form = document.querySelector('.form');
const keywordsEl = document.querySelector('input[name="keywords"]');
form.addEventListener('submit', e => {
    e.preventDefault();
    const keywords = keywordsEl.value.trim();
    clearGallery();
    showLoader();
    if (!keywords) {
      hideLoader();
      return iziToast.error({
        title: 'Error',
        message: 'Please enter a search term.',
        position: 'topRight',
      });
    }
    fetchImages(keywords)
      .then(resolve => {
        if (resolve.data.hits.length <= 0) {
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
        createGallery(resolve.data.hits);
        hideLoader();
        form.reset();
      })
      .catch(err => {
        hideLoader(); 
        iziToast.error({
          title: 'Error',
          message: err.message,
          position: 'topRight',
        });
      });
  });