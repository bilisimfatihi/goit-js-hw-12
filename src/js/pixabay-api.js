import axios from "axios";

const publicKey = '50720875-9e46c15e3f43f509a571f7064';
const url = 'https://pixabay.com/api/';

export function fetchImages(query) {
    const currentURL = `${url}?key=${publicKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=20`;
    return axios.get(currentURL)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        throw new Error(error)
    })
}