import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import {asyncFeedLocation} from '../../../../store/reducers/weather';
import {useTheme} from '@react-navigation/native';
import {measures} from '../../../../styles';
import getGPSPosition, {
  GeoPositionType,
} from '../../../../shared/gps/accessGPS';
import {themeColorsTypes} from '../../../../styles/themes/themesType';
import {CircleSnail} from 'react-native-progress';

export default function LocationStripe() {
  const dispatch = useDispatch();
  const {colors}: themeColorsTypes = useTheme();
  const styles = dynamicStyles(colors);

  const city = useSelector((state: any) => state.store.weather.city);
  const hasCityData = city ? true : false;

  const isLoadingWeather = useSelector(
    (state: any) => state.store.weather.isLoading,
  );

  const handleGetWeather = async () => {
    const successGetGPS = (position: GeoPositionType) => {
      dispatch(
        asyncFeedLocation(position.coords.latitude, position.coords.longitude),
      );
    };

    await getGPSPosition(successGetGPS);
  };

  return (
    <View style={styles.container}>
      {hasCityData && <Text style={styles.textStyle}>{city}</Text>}

      <View style={hasCityData ? styles.GPSIconSide : styles.GPSIconCenter}>
        {isLoadingWeather ? (
          <CircleSnail color={colors.secondary} />
        ) : (
          <TouchableOpacity onPress={handleGetWeather}>
            <Icon
              name={'location-pin'}
              size={measures.fontSize.XL}
              color={colors.secondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const dynamicStyles = (colors: themeColorsTypes) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    textStyle: {
      color: colors.secondary,
      fontSize: measures.fontSize.L,
      textAlign: 'center',
    },
    GPSIconSide: {
      position: 'absolute',
      marginLeft:
        measures.paddingAdjustedScreenWidth - measures.standardPadding,
    },
    GPSIconCenter: {
      flex: 1,
      alignItems: 'center',
    },
  });
