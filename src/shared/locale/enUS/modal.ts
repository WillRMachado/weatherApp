import {gpsPermissionType, modalType} from '../_languageTypes/modal';

const gpsPermission: gpsPermissionType = {
  title: 'We need the GPS =(',
  description: 'To get weather data, we need authorization to access your GPS',
  buttonText: 'Continue',
};

const weatherApiError: any = {
  title: 'Could`t get data',
  description:
    'Sadly we were unable to get weather data for your location ate the time. Please, try again later',
  buttonText: 'Continue',
};

const weatherApiErrorWithStoredData: any = {
  title: 'Could`t get data',
  description:
    'Sadly we were unable to get weather data for your location ate the time. Don`t worry, we will display the last available data',
  buttonText: 'Continue',
};

const modal: modalType = {
  gpsPermission,
  weatherApiError,
  weatherApiErrorWithStoredData,
};

export default modal;
