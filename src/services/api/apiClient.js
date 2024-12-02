import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.API_URL || 'https://674d167154e1fca9290e519c.mockapi.io', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
