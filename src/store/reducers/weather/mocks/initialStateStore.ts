const forecastArray = Array(7).fill({
  time: undefined,
  icon: undefined,
  main: undefined,
});

const initialStore = {
  isLoading: false,
  errorFetchingData: false,
  lastUpdated: undefined,
  current: {
    time: 0,
    sunrise: undefined,
    sunset: undefined,
    icon: undefined,
    main: undefined,
  },
  forecast: forecastArray,
};

export default initialStore;
