import { API_TOKEN } from "./API-key";

const MAIN_URL = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: API_TOKEN,
  }
};

export const ApiTrendsMovie = () => {
    return fetch(MAIN_URL, options)
        .then(response => {
            return response.json();
        });
};

export const ApiFindMovie = (queryValue) => {
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${queryValue}&language=en-US&page=1`;
    return fetch(SEARCH_URL, options)
        .then(response => {
            return response.json()
        });
 }

export const ApiMovieDetails = (movieId) => { 
    const DETAIL_URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    return fetch(DETAIL_URL, options)
        .then(response => {
            return response.json();
        });
}

export const ApiMovieReview = (movieId) => {
    const REVIEW_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
    return fetch(REVIEW_URL, options)
        .then(response => {
            return response.json();
        });
}

export const ApiMovieCredits = (movieId) => {
    const CREDITS_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
    return fetch(CREDITS_URL, options)
        .then(response => {
            return response.json();
        });
}