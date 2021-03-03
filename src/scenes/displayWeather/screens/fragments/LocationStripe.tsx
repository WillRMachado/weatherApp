import React from 'react';
import {
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  StyleSheet,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import {asyncFeedLocation} from '../../../../store/reducers/weather';
import {useTheme} from '@react-navigation/native';
import {measures} from '../../../../styles';
import Geolocation, {
  SuccessCallback,
  ErrorCallback,
  GeoPosition,
} from 'react-native-geolocation-service';
import {themeColorsTypes} from '../../../../styles/themes/themesType';
import {CircleSnail} from 'react-native-progress';

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

export default function LocationStripe() {
  const dispatch = useDispatch();
  const {colors}: themeColorsTypes = useTheme();
  const styles = dynamicStyles(colors);

  const city = useSelector((state: any) => state.store.weather.city);

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
    <>
      <Text style={styles.textStyle}>{city}</Text>

      <View style={styles.GPSIcon}>
        {isLoadingWeather ? (
          <CircleSnail color={colors.secondary} />
        ) : (
          <TouchableOpacity onPress={handleGetWeather}>
            <Icon
              name={isLoadingWeather ? 'rocket' : 'location-pin'}
              size={measures.fontSize.XL}
              color={colors.secondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const dynamicStyles = (colors: themeColorsTypes) =>
  StyleSheet.create({
    textStyle: {
      color: colors.secondary,
      fontSize: measures.fontSize.L,
      justifyContent: 'center',
      flex: 1,
      textAlign: 'center',
    },
    GPSIcon: {
      position: 'absolute',
      marginLeft:
        measures.paddingAdjustedScreenWidth - measures.standardPadding,
    },
  });
