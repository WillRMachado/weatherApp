import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {measures} from '../../styles/index';
import {useTheme} from '@react-navigation/native';
import {themeColorsTypes} from '../../styles/themes/themesType';
import TranslateText from '../translate/TranslateText';

const PrimaryButton = (props: {text: string} & TouchableOpacityProps) => {
  const {text} = props;
  const {colors}: themeColorsTypes = useTheme();
  const styles = dynamicStyles(colors);

  return (
    <TouchableOpacity style={styles.buttonContainer} {...props}>
      <TranslateText string={text} style={styles.buttonText} />
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const dynamicStyles = (colors: themeColorsTypes) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: colors.secondary,
      alignItems: 'center',
      borderWidth: measures.border.borderWidthStandard,
      elevation: 8,
      borderRadius: measures.paddingAdjustedScreenWidth,
      margin: measures.standardPadding,
    },
    buttonText: {
      fontSize: measures.fontSize.M,
      padding: measures.standardPadding / 2,
      paddingLeft: measures.standardPadding,
      paddingRight: measures.standardPadding,
      color: colors.primary,
    },
  });
