import axios, { AxiosError, AxiosResponse } from 'axios';

const httpClient = axios.create({
  baseURL: 'https://creaplus.free.beeceptor.com',
});

function responseSuccessInterceptor(response: AxiosResponse) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  return response;
}
function responseFailureInterceptor(error: AxiosError) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  return Promise.reject(error);
}

httpClient.interceptors.response.use(
  (response :AxiosResponse) => responseSuccessInterceptor(response),
  (error: AxiosError) => responseFailureInterceptor(error),
);

export default httpClient;
