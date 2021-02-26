import React from 'react';
import Hello from '../components/Hello';
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
        <Tab.Screen name={'w'} component={Hello} />
        <Tab.Screen
          name={routes.weather.displayWeather}
          component={DisplayWeather}
        />
        <Tab.Screen name={'w3'} component={Hello} />
      </Tab.Navigator>
    </HOCWeatherWrapper>
  );
};

export default homeNavigator;
