import React from 'react';
import DisplayWeather from '../scenes/displayWeather/screens/DisplayWeather';
import HOCWeatherWrapper from '../scenes/displayWeather/HOCWeatherWrapper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import routes from './routeNames';

const Tab = createMaterialTopTabNavigator();

const homeNavigator = () => {
  return (
    <HOCWeatherWrapper>
      <Tab.Navigator
        initialRouteName={routes.weather.displayWeather}
        tabBar={() => <></>}
        sceneContainerStyle={{backgroundColor: 'transparent'}}>
        <Tab.Screen
          name={routes.weather.displayWeather}
          component={DisplayWeather}
        />
      </Tab.Navigator>
    </HOCWeatherWrapper>
  );
};

export default homeNavigator;
