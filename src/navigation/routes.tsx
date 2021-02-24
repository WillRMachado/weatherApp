import React from 'react';
import Hello from '../components/Hello';
import DisplayWeather from '../screens/displayWeather/DisplayWeather';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import routes from './routeNames';

const Tab = createMaterialTopTabNavigator();

const homeNavigator = (params) => {
  return (
    <Tab.Navigator
      initialRouteName={routes.weather.displayWeather}
      tabBar={() => <></>}>
      <Tab.Screen
        name={'w'}
        component={Hello}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name={routes.weather.displayWeather}
        component={DisplayWeather}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name={'w3'}
        component={Hello}
        // options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default homeNavigator;
