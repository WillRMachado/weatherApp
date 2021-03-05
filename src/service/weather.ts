import {AxiosRequestConfig} from 'axios';

import networkCaller from './client/networkCaller';

// const instance = axiosInstance('https://api.openweathermap.org/data/2.5/');
const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const baseIconUrl = 'https://openweathermap.org/img/wn/';

const getWeatherOneCall = async (lat: number, lon: number) => {
  // this is a free key with limitation on the server
  //it will be expired before the repo is made public
  // react-native-dotenv or even an uncommitted json can keep an production key
  //from being visible in the repo, but will not hide it in an app bundle inspection
  //or man-in-the-middle attacks
  //consider using a serverless function for production app
  const url = `${baseUrl}onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=8d3b580e426bcd05173d38ccf68e2e83&appid=8d3b580e426bcd05173d38ccf68e2e83`;
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
