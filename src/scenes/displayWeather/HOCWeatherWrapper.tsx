import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';

const HOCWeatherWrapper: React.FunctionComponent = (props) => {
  const {colors} = useTheme();

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      colors={[colors.primary, colors.secondary, colors.tertiary]}
      style={{flex: 1}}>
      {props.children}
    </LinearGradient>
  );
};

export default HOCWeatherWrapper;
