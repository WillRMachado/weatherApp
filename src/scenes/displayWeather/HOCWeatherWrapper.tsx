import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from '@react-navigation/native';
import {themeColorsTypes} from '../../styles/themes/themesType';

const HOCWeatherWrapper: React.FunctionComponent = (props) => {
  const {colors}: themeColorsTypes = useTheme();

  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1.0}}
      colors={[colors.primary, colors.tertiary]}
      style={{flex: 1}}>
      {props.children}
    </LinearGradient>
  );
};

export default HOCWeatherWrapper;
