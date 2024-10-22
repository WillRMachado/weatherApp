import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import reducersStore from '../../src/store';

import {darkTheme, lightTheme} from '../../src/styles';

type MockedNavigatorProps = {
  component: any;
  params?: object;
};

const Stack = createStackNavigator();

const MockedNavigator = ({component, params = {}}: MockedNavigatorProps) => {
  return (
    <Provider store={reducersStore}>
      <NavigationContainer theme={darkTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="MockedScreen"
            component={component}
            initialParams={params}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default MockedNavigator;
