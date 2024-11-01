// src/api/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080', // Replace with the API Gateway URL
});

// Optionally add an interceptor to include the authentication token in headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
