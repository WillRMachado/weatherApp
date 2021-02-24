import axios from 'axios';
import axiosRetry from 'axios-retry';
import verifyConnection from '../interceptors/verifyConnection';

const axiosInstance = (
  url: string,
  headers?: any,
  timeout?: number,
  retries?: number,
) => {
  axios.create({
    baseURL: url,
    timeout: timeout || 30000,
    headers: headers,
  });

  const retriesLimit = retries || 4;

  axiosRetry(axios, {
    retries: retriesLimit,
    retryDelay: (retryCount) => {
      console.log(
        `Retrying request -> ${retryCount} of maximum a maximum of ${retriesLimit}`,
      );
      return retryCount * 1000;
    },
  });


  // this interceptor requires iOS linking
  // I`m not running a Mac OS at the moment
  // develop further when integration can be tested properly on both platforms
  // verifyConnection(axios);
  return axios;
};

export default axiosInstance;
