import React from 'react';
import {StyleSheet} from 'react-native';
import Image from 'react-native-image-progress';
import {useTheme} from '@react-navigation/native';
import {themeColorsTypes} from '../../styles/themes/themesType';
import {CircleSnail} from 'react-native-progress';

export default function ImageLoader(props: {imageUri: string; style?: object}) {
  const {imageUri, style} = props;
  const {colors}: themeColorsTypes = useTheme();

  return (
    <Image
      source={{uri: imageUri}}
      indicator={CircleSnail}
      indicatorProps={{
        size: 30,
        borderWidth: 0,
        color: colors.tertiary,
      }}
      style={[styles.defaultStyle, {...style}]}
    />
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    width: 12,
    height: 12,
  },
});
