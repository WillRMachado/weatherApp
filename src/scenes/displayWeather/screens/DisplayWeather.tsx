import React from 'react';
import {View, Text, TouchableOpacity, PermissionsAndroid, StyleSheet} from 'react-native';
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

const getGPSPosition = async (
  successCallback: SuccessCallback,
  errorCalback?: ErrorCallback,
) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(successCallback, (error) => {
        console.log('err', error.code, error.message);
      });
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const DisplayWeather: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const {colors}: themeColorsTypes = useTheme();
  const styles = dynamicStyles(colors)

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

  const handleGetWeather = async () => {
    const successGetGPS = (position: GeoPosition) => {
      dispatch(
        asyncFeedLocation(position.coords.latitude, position.coords.longitude),
      );
    };

    await getGPSPosition(successGetGPS);
  };

  return (
    <View style={globalStyles.structure.screenContainer}>
      <View
        style={styles.textContainer}>
        <TranslateText
          string={`weather.${mainWeatherIcon.toLowerCase()}`}
          style={styles.textStyle} />
      </View>









      
      <View style={globalStyles.structure.contentContainer}>
        <MainWeatherIcon
          main={mainWeatherIcon}
          iconSize={measures.fontSize.iconXXL}
          style={{
            width: measures.paddingAdjustedScreenWidth,
            height: measures.paddingAdjustedScreenWidth,
          }}
        />
      </View>






      <View
        style={styles.textContainer}>
        <Text
          style={{
            color: colors.secondary,
            fontSize: measures.fontSize.L,
            justifyContent: 'center',
            flex: 1,
            borderColor: 'red',
            textAlign: 'center',
          }}>
          {city}
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            marginLeft:
              measures.paddingAdjustedScreenWidth - measures.standardPadding,
          }}
          onPress={handleGetWeather}>
          <Icon
            name={isLoadingWeather ? 'rocket' : 'location-pin'}
            size={measures.fontSize.XL}
            color={colors.secondary}
          />
        </TouchableOpacity>
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


const dynamicStyles = (colors):themeColorsTypes => StyleSheet.create({
  textContainer: {
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
