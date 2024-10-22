const weatherUpdatedStore = {
  isLoading: false,
  lastUpdated: '',
  city: undefined,
  current: {
    time: 1614142251,
    sunrise: 1614157185,
    sunset: 1614202798,
    icon: '01n',
    main: 'Clear',
    isDark: true,
  },
  forecast: [
    {time: 1614265200, icon: '10d', main: 'Rain'},
    {time: 1614351600, icon: '10d', main: 'Rain'},
    {time: 1614438000, icon: '10d', main: 'Rain'},
    {time: 1614524400, icon: '10d', main: 'Rain'},
    {time: 1614610800, icon: '10d', main: 'Rain'},
    {time: 1614697200, icon: '10d', main: 'Rain'},
    {time: 1614783600, icon: '10d', main: 'Rain'},
  ],
  errorFetchingData: false,
};

export {weatherUpdatedStore};
