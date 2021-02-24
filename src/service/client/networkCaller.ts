import axiosInstance from './axiosInstance';
import {AxiosRequestConfig} from 'axios';

const networkCaller = async (
  baseUrl: string,
  requestData: AxiosRequestConfig,
) => {
  const instance = axiosInstance(baseUrl);
  return await instance
    .request(requestData)
    .then((response) => response)
    .catch((err) => err);
};

export default networkCaller;
