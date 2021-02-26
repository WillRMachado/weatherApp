import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/routes';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import reducersStore, {persistor} from './src/store';
import {useDispatch, useSelector} from 'react-redux';

import {darkTheme, lightTheme} from './src/styles';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function Navigation() {
  const isDark = useSelector(
    (state: any) => state.store.weather.current.isDark,
  );
  console.log(isDark);

  return (
    <NavigationContainer theme={isDark ? MyTheme : MyTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={reducersStore}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
