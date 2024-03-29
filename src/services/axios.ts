import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const token = cookies.get('token');

const apiUrl = process.env.REACT_APP_API_URL ?? 'http://localhost:3001';

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { axiosClient };
