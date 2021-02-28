import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getWeatherOneCall} from '../../../service/weather';
import {weatherListType} from '../../../shared/types/weather';

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

const asyncGetWeather = (lat: string, lon: string): Function => {
  return async function (
    dispatch: (arg0: {payload: any; type: string}) => void,
  ) {
    dispatch(_loading());
    const result = await getWeatherOneCall(lat, lon);
    if (result.status === 200) {
      dispatch(saveWeatherData(result.data));
    } else {
      dispatch(_errorFetchingData());
    }
  };
};

export const {saveWeatherData, _errorFetchingData, _loading} = weather.actions;
export {asyncGetWeather};
export default weather.reducer;
