import axiosInstance from './client/axiosInstance';
import {AxiosRequestConfig} from 'axios';

import networkCaller from './client/networkCaller';

// const instance = axiosInstance('https://api.openweathermap.org/data/2.5/');
const baseUrl = 'https://api.openweathermap.org/data/2.5/';

const getWeatherOneCall = async (lat: string, lon: string) => {
  const url = `${baseUrl}onecall?lat=${lat}&lon=${lon}&appid=8d3b580e426bcd05173d38ccf68e2e83`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

export {getWeatherOneCall};
