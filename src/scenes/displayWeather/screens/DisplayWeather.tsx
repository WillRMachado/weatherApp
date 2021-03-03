import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import {asyncFeedLocation} from '../../../store/reducers/weather';
import {useTheme} from '@react-navigation/native';
import globalStyles, {measures} from '../../../styles';
import Geolocation, {
  SuccessCallback,
  ErrorCallback,
  GeoPosition,
} from 'react-native-geolocation-service';
import {themeColorsTypes} from '../../../styles/themes/themesType';
import WeatherStripe from '../../../components/weatherStripe/WeatherStripe';
import MainWeatherIcon from '../../../components/mainWeatherIcon/MainWeatherIcon';
import TranslateText from '../../../components/translate/TranslateText';
import LocationStripe from './fragments/LocationStripe';

const DisplayWeather: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const {colors}: themeColorsTypes = useTheme();
  const styles = dynamicStyles(colors);

  const sevenDaysForecast = useSelector(
    (state: any) => state.store.weather.forecast,
  );
  const city = useSelector((state: any) => state.store.weather.city);
  const mainWeatherIcon = useSelector(
    (state: any) => state.store.weather.current.main,
  );
  const isLoadingWeather = useSelector(
    (state: any) => state.store.weather.isLoading,
  );

  return (
    <View style={globalStyles.structure.screenContainer}>
      <View style={styles.componentContainer}>
        <TranslateText
          string={`weather.${mainWeatherIcon.toLowerCase()}`}
          style={styles.textStyle}
        />
      </View>

      <View style={globalStyles.structure.contentContainer}>
        <MainWeatherIcon
          main={mainWeatherIcon}
          iconSize={measures.fontSize.iconXXL}
          style={styles.mainWeatherIcon}
        />
      </View>

      <View style={styles.componentContainer}>
        <LocationStripe />
      </View>

      <View
        style={{
          paddingBottom: measures.standardPadding,
        }}>
        <WeatherStripe weatherList={sevenDaysForecast} />
      </View>
    </View>
  );
};

export default DisplayWeather;

const dynamicStyles = (colors: themeColorsTypes) =>
  StyleSheet.create({
    mainWeatherIcon: {
      width: measures.paddingAdjustedScreenWidth,
      height: measures.paddingAdjustedScreenWidth,
    },
    componentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: measures.fontSize.XXL,
      alignItems: 'center',
    },
    textStyle: {
      color: colors.secondary,
      fontSize: measures.fontSize.L,
      justifyContent: 'center',
      flex: 1,
      borderColor: 'red',
      textAlign: 'center',
    },
  });
