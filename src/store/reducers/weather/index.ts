import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getWeatherOneCall} from '../../../service/weather';
import {reverseGeocode} from '../../../service/geolocation';
import {weatherListType} from '../../../shared/types/weather';
import {showModal} from '../userData';

const forecastArray: weatherListType = Array(7).fill({
  time: undefined,
  icon: undefined,
  main: undefined,
});

const weather = createSlice({
  name: 'weather',
  initialState: {
    isLoading: false,
    errorFetchingData: false,
    lastUpdated: undefined,
    city: undefined,
    current: {
      time: undefined,
      sunrise: undefined,
      sunset: undefined,
      icon: undefined,
      main: undefined,
      isDark: false,
    },
    forecast: forecastArray,
  },
  reducers: {
    _loading(state) {
      state.isLoading = true;
    },
    _errorFetchingData(state) {
      state.isLoading = false;

      state.errorFetchingData = true;
    },
    saveCityData(state, action: PayloadAction<any>) {
      state.city = action.payload.address.city;
    },
    saveWeatherData(state, action: PayloadAction<any>) {
      state.lastUpdated = new Date();

      const stateCurrent = state.current;
      const actionCurrent = action.payload.current;

      stateCurrent.time = actionCurrent?.dt;
      stateCurrent.sunrise = actionCurrent?.sunrise || undefined;
      stateCurrent.sunset = actionCurrent?.sunset || undefined;
      stateCurrent.icon = actionCurrent?.weather[0]?.icon || undefined;
      stateCurrent.main = actionCurrent?.weather[0]?.main || undefined;
      stateCurrent.isDark = actionCurrent?.uvi === 0 ? true : false;

      if (Array.isArray(action.payload.daily)) {
        //API returns forecast from current day,  we dont need it
        action.payload.daily.shift();
        const actionForecastData = action.payload.daily.map(
          (forecastDay: object) => {
            return {
              time: forecastDay?.dt || undefined,
              icon: forecastDay?.weather[0]?.icon || undefined,
              main: forecastDay?.weather[0]?.main || undefined,
            };
          },
        );
        state.forecast = actionForecastData;
      }

      state.isLoading = false;
      state.errorFetchingData = false;
    },
  },
});

const asyncFeedLocation = (lat: number, lon: number): Function => {
  return async function (
    dispatch: (arg0: {payload: any; type: string}) => void,
    getState: Function,
  ) {
    dispatch(_loading());

    //fetch APIs
    const apiResults = await Promise.all([
      getWeatherOneCall(lat, lon),
      reverseGeocode(lat, lon),
    ]).then((results) => results);

    const weatherResult = apiResults[0];
    const reverseGeocodeResult = apiResults[1];

    //verify api call success
    if (weatherResult.status === 200 && reverseGeocodeResult.status === 200) {
      dispatch(saveWeatherData(weatherResult.data));
      dispatch(saveCityData(reverseGeocodeResult.data));
    } else {
      const hasData = getState().store.weather.lastUpdated;
      hasData
        ? //error message if previous data is available
          dispatch(
            showModal({
              title: 'modal.weatherApiErrorWithStoredData.title',
              description: 'modal.weatherApiErrorWithStoredData.description',
              buttonText: 'modal.weatherApiErrorWithStoredData.buttonText',
            }),
          )
        : //error message if previous data is NOT available
          dispatch(
            showModal({
              title: 'modal.weatherApiError.title',
              description: 'modal.weatherApiError.description',
              buttonText: 'modal.weatherApiError.buttonText',
            }),
          );

      dispatch(_errorFetchingData());
    }
  };
};

export const {
  saveCityData,
  saveWeatherData,
  _errorFetchingData,
  _loading,
} = weather.actions;
export {asyncFeedLocation};
export default weather.reducer;
