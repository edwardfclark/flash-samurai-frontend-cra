import axios from 'axios';

const apiUrl = process.env.BACKEND_URL ?? 'http://localhost:3001';

const axiosClient = axios.create({
  baseURL: apiUrl,
});

export { axiosClient };
