import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  // Create an axios instance
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000', // Change this to your JSON server URL
  });

  // Make axios available throughout the app
  nuxtApp.provide('axios', axiosInstance);
});