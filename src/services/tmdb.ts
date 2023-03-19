import axios from 'axios';

const tmdb = axios.create({
  baseURL: 'https://myserielist.vercel.app/api/',
  timeout: 5000,
});

tmdb.interceptors.response.use(
  r => r,
  error => {
    console.log('response', JSON.stringify(error.response, null, 4));
    return Promise.reject(error);
  },
);

export default tmdb;
