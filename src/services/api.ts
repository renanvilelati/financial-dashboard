import axios from 'axios';

export const api = axios.create({
  // baseURL: import.meta.env.API_URL,
  baseURL: 'http://localhost:4000/',
});
