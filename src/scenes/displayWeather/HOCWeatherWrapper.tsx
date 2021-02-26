import React from 'react';
import {View, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const HOCWeatherWrapper: React.FunctionComponent = (props) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      colors={['#e4e00f', '#56e40f']}
      style={{flex: 1}}>
      {props.children}
    </LinearGradient>
  );
};

export default HOCWeatherWrapper;
