import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/routes';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import reducersStore, {persistor} from './src/store';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';

import {darkTheme, lightTheme} from './src/styles';

function NavigationWithRedux() {
  const isDark = useSelector(
    (state: any) => state.store.weather.current.isDark,
  );
  return (
    <NavigationContainer theme={isDark ? darkTheme : lightTheme}>
      <StatusBar
        animated={true}
        backgroundColor={darkTheme.colors.primary}
        hidden={true}
      />
      <MainNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={reducersStore}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationWithRedux />
      </PersistGate>
    </Provider>
  );
}
