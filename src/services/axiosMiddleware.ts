import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { ApiError } from '../types/interface';
import { VITE_API_URL } from '../variables';

const API_URL = VITE_API_URL;
// Create an Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL, // Replace with your API base URL
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem('token');

    // Skip token for specific APIs or based on custom config
    const skipAuth = config.headers?.['Skip-Authorization'];

    if (!skipAuth && token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Remove the custom header before sending the request
    if (skipAuth && config.headers) {
      delete config.headers['Skip-Authorization'];
    }
    return config;
  },
  (error: ApiError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse<ApiError> => {
    return response;
  },
  (error: ApiError) => {
    if (error.response) {
      if (error.response.status === 401) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
