import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import globalStyles, {measures} from '../../../styles';
import {themeColorsTypes} from '../../../styles/themes/themesType';
import WeatherStripe from '../../../components/weatherStripe/WeatherStripe';
import MainWeatherIcon from '../../../components/mainWeatherIcon/MainWeatherIcon';
import TranslateText from '../../../components/translate/TranslateText';
import LocationStripe from './fragments/LocationStripe';
import getGPSPosition from '../../../shared/gps/accessGPS';

const DisplayWeather: React.FunctionComponent = () => {
  const {colors}: themeColorsTypes = useTheme();
  const styles = dynamicStyles(colors);

  const sevenDaysForecast = useSelector(
    (state: any) => state.store.weather.forecast,
  );
  const mainWeatherIcon = useSelector(
    (state: any) => state.store.weather.current.main,
  );

  const lastWeatherUpdated = useSelector(
    (state: any) => state.store.weather.lastUpdated,
  );

  const hasWeatherData = lastWeatherUpdated ? true : false;

  useEffect(() => {
    getGPSPosition();
  }, []);

  return (
    <View style={globalStyles.structure.screenContainer}>
      <View style={styles.componentContainer}>
        <TranslateText
          string={
            hasWeatherData
              ? `weather.${mainWeatherIcon.toLowerCase()}`
              : 'weather.unableToFind'
          }
          style={[
            styles.currentWeatherText,
            hasWeatherData
              ? styles.foundWeatherText
              : styles.notFoundWeatherText,
          ]}
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

      {hasWeatherData && (
        <View
          style={{
            paddingBottom: measures.standardPadding,
          }}>
          <WeatherStripe weatherList={sevenDaysForecast} />
        </View>
      )}
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
      height: measures.fontSize.XXL,
      alignItems: 'center',
    },
    currentWeatherText: {
      color: colors.secondary,
      justifyContent: 'center',
      flex: 1,
      textAlign: 'center',
    },
    foundWeatherText: {
      fontSize: measures.fontSize.XL,
      paddingTop: measures.standardPadding,
    },
    notFoundWeatherText: {
      color: colors.secondary,
      fontSize: measures.fontSize.L,
      paddingTop: measures.standardPadding * 2,
      paddingLeft: measures.standardPadding,
      paddingRight: measures.standardPadding,
    },
  });
