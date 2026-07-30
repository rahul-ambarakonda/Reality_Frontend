import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Placeholder for API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
