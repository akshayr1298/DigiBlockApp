import axios from 'axios';
import { server } from '../API/Server';

const api = axios.create({
  baseURL: `${server}`, // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
    // You can set other common headers here
  },
});

// Define your API methods
const apiService = {
  getUserData: () => {
    return api.get('/users');
  },

  postData: (data) => {
    return api.post('/data', data);
  },

  // Add other API methods as needed
};

export default apiService;
