import React from 'react';
import {View, StyleSheet} from 'react-native';
import {weatherItemType} from '../../../shared/types/weather';
import TranslateWeekday from '../../translate/TranslateWeekday';
import {measures} from '../../../styles/index';
import {useTheme} from '@react-navigation/native';
import {themeColorsTypes} from '../../../styles/themes/themesType';
import ImageLoader from '../../imageLoader/ImageUriLoader';
import {iconUrl} from '../../../service/weather';

export interface displayItemType {
  index: number;
  item: weatherItemType;
}

const WeatherItem = (props: {weatherUnity: displayItemType}) => {
  const {weatherUnity} = props;
  const {colors}: themeColorsTypes = useTheme();
  const styles = dynamicStyles(colors, weatherUnity.index);

  return (
    <View style={styles.box}>
      <ImageLoader
        imageUri={iconUrl(weatherUnity.item.icon)}
        style={styles.iconContainer}
      />
      <TranslateWeekday
        UTCSeconds={weatherUnity.item.time}
        style={styles.dateText}
      />
    </View>
  );
};

export default WeatherItem;

const dynamicStyles = (colors: themeColorsTypes, itemIndex: number) => {
  const boxSize = measures.responsiveWidth * 0.33;

  return StyleSheet.create({
    box: {
      width: boxSize,
      height: boxSize,
      backgroundColor: colors.semitransparentBackground,
      borderRadius: measures.responsiveWidth * 0.05,
      marginRight: measures.standardPadding,
      marginLeft: itemIndex === 0 ? measures.standardPadding : 0,
      justifyContent: 'center',
      alignItems: 'center',
    },

    iconContainer: {
      width: boxSize,
      height: boxSize * 0.75,
    },

    dateText: {
      color: colors.text,
      fontSize: measures.fontSize.XS,
    },
  });
};
