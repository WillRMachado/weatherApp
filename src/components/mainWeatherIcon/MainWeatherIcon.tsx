import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {themeColorsTypes} from '../../styles/themes/themesType';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const getIconComponent = (
  main: string,
  size: number,
  color: string,
  isDark?: boolean,
) => {
  switch (main) {
    case 'Thunderstorm':
      return <Feather name={'cloud-lightning'} size={size} color={color} />;
    case 'Drizzle':
      return <Feather name={'cloud-drizzle'} size={size} color={color} />;
    case 'Rain':
      return <Feather name={'cloud-rain'} size={size} color={color} />;
    case 'Snow':
      return <Feather name={'cloud-snow'} size={size} color={color} />;
    case 'Tornado':
      return (
        <MaterialCommunityIcons
          name={'weather-tornado'}
          size={size}
          color={color}
        />
      );
    case 'Clear':
      if (isDark) {
        return <Feather name={'moon'} size={size} color={color} />;
      } else {
        return <Feather name={'sun'} size={size} color={color} />;
      }
    case 'Clouds':
      return <Feather name={'cloud'} size={size} color={color} />;
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Ash':
    case 'Squall':
      return (
        <MaterialCommunityIcons
          name={'weather-fog'}
          size={size}
          color={color}
        />
      );
    default:
      return <Feather name={'frown'} size={size} color={color} />;
  }
};

export default function MainWeatherIcon(props: {
  main: string;
  iconSize?: number;
  style?: object;
}) {
  const {main, style, iconSize} = props;
  const {colors}: themeColorsTypes = useTheme();
  const isDark = useSelector(
    (state: any) => state.store.weather.current.isDark,
  );

  return (
    <View style={[styles.defaultStyle, {...style}]}>
      {getIconComponent(main, iconSize || 90, colors.secondary, isDark)}
    </View>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
