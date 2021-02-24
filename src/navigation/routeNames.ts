type routesType = {
  [key: string]: navigator;
};

type navigator = {[key: string]: string};

const routes: routesType = {
  weather: {
    displayWeather: 'displayWeather',
  },
};

export default routes;
