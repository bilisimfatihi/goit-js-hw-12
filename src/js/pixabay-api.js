import axios from "axios";

const publicKey = '50720875-9e46c15e3f43f509a571f7064';
const url = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 40) {
    try {
        const currentURL = `${url}?key=${publicKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
        const response = await axios.get(currentURL);
        return response.data;
    } catch (error) {
        throw error;
    }
}