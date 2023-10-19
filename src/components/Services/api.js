import axios from 'axios';

const API_KEY = '61565724251169988f32e57535b39744';
const BASE_URL = 'https://api.themoviedb.org/3/movie/';

export const fetchMovieCast = async movie_id => {
  try {
    const response = await axios.get(`${BASE_URL}${movie_id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });

    const { cast } = response.data;
    return cast;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// 2

export const fetchMovieDetails = async movie_id => {
  try {
    const response = await axios.get(`${BASE_URL}${movie_id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// 3

export const fetchMovieReviews = async movie_id => {
  try {
    const response = await axios.get(`${BASE_URL}${movie_id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });

    const { results } = response.data;
    return results;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

//   4

const BASE_URL_2 = 'https://api.themoviedb.org/3/search/movie';
export const findMovies = async query => {
  try {
    const response = await axios.get(BASE_URL_2, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

// 5

const BASE_URL_3 = 'https://api.themoviedb.org/3/trending/movie/week';

export const fetchTrends = async () => {
  try {
    const response = await axios.get(BASE_URL_3, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};

