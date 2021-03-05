import {AxiosRequestConfig} from 'axios';
import ENV from '../../env';

import networkCaller from './client/networkCaller';

// const instance = axiosInstance('https://api.openweathermap.org/data/2.5/');
const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const baseIconUrl = 'https://openweathermap.org/img/wn/';

const getWeatherOneCall = async (lat: number, lon: number) => {
  //consider using an user authentication for real-life app
  const url = `${baseUrl}onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${ENV.OPENWEATHER_API_KEY}`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

const iconUrl = (iconName: string, smallSize?: boolean) => {
  const sizeModifier: string = !smallSize ? '@2x' : '';

  return `${baseIconUrl}${iconName}${sizeModifier}.png`;
};

export {getWeatherOneCall, iconUrl};
