import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from 'constants/common';
import auth from './auth';

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${auth.getToken()}`,
  },
});

axiosIns.interceptors.request.use(
  (config): AxiosRequestConfig => {
    // Get token from localStorage
    const accessToken = auth.getToken();

    // If token is present add it to request's Authorization Header
    if (accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    throw error.response;
  }
);

// throw error when call aixos error
axiosIns.interceptors.response.use(undefined, (error) => {
  throw error.response;
});

export default axiosIns;
