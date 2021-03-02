import {AxiosRequestConfig} from 'axios';

import networkCaller from './client/networkCaller';

const baseUrl = 'https://nominatim.openstreetmap.org/';

const reverseGeocode = async (lat: number, lon: number) => {
  const url = `${baseUrl}reverse?format=json&lat=${lat}&lon=${lon}`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

export {reverseGeocode};
